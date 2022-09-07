import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const dispatch = useDispatch()

  // --- useState --- //
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // --- useNavigate --- //
  const navigate = useNavigate()

  // --- useSelectors --- //
  // 1. Login
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/jobcardcreation')
    }
  }, [userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <div className="m-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default LoginScreen
