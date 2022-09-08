import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_RESET,
  USER_LOGIN_REQUEST,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
} from '../constants/userConstants'
import axios from 'axios'

// 1. Login Action
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      '/api/users/login',
      { username, password },
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    })
    localStorage.setItem('userInfo', JSON.stringify(res.data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// 2. Register Action
export const register = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.post(
      '/api/users/register',
      { username, password },
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    })
    localStorage.setItem('userInfo', JSON.stringify(res.data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// 3. Logout
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGIN_RESET })
    dispatch({ type: USER_REGISTER_RESET })
  } catch (error) {
    console.log(error)
  }
}

// 4. Update
export const update = (details) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.put('/api/users/profile', details, config)
    dispatch({ type: USER_UPDATE_SUCCESS, payload: res.data })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
    localStorage.setItem('userInfo', JSON.stringify(res.data))
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// 5. Update Reset
export const updateReset = () => (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_RESET })
  } catch (error) {
    console.log('Update reset error')
  }
}
