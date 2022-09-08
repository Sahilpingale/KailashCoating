import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
} from '../constants/userConstants'

//1. Login Reducer
export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      }
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
      }
    case USER_LOGIN_RESET:
      return {}
    default:
      return state
  }
}

// 2. Register Reducer
export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        success: false,
        error: payload,
      }
    case USER_REGISTER_RESET:
      return {}
    default:
      return state
  }
}

// 3. Update Reducer
export const userUpdateReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        updatedUser: payload,
      }
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      }
    case USER_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
