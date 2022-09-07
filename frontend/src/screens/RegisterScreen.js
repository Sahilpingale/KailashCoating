import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // --- useState --- //
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // --- useSelector --- //
  const userRegister = useSelector((state) => state.userRegister)
  const { success } = userRegister

  // --- useEffect --- //
  useEffect(() => {
    if (success) {
      navigate('/jobcardcreation')
    }
  }, [navigate, success])
  // Handlers
  const submitHandler = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      // console.log('submit')
      dispatch(register(username, password))
    }
  }
  return (
    <div className="m-5">
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
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen
