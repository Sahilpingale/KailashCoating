import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { update, updateReset } from '../actions/userActions'

const EditProfileScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // --- useSelectors --- //
  // 1. Login
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  // 2. Update
  const userUpdate = useSelector((state) => state.userUpdate)
  const { success } = userUpdate
  // --- useState --- //
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      setUsername(userInfo.username)
    }
    if (success) {
      navigate('/jobcardcreation')
      dispatch(updateReset())
    }
  }, [userInfo, navigate, success])

  // Handler
  const submitHandler = (e) => {
    e.preventDefault()
    if (password) {
      if (password !== confirmPassword) {
        console.log('passwords dont match')
      } else {
        dispatch(update({ username, password }))
      }
    } else {
      dispatch(update({ username }))
    }
  }

  return (
    <div className="m-5">
      <div className="m-5">
        <h3 className="mb-4">Edit Profile</h3>
        <form onSubmit={submitHandler} autoComplete="off">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              value={username}
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
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
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfileScreen
