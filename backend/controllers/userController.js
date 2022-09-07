import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Test get all users
// @route   GET /api/users
// @access  Public

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc Authenticate user and generate token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid username or password')
  }
})

// @desc Register new user
// @route POST /api/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body
  const checkUser = await User.findOne({ username })
  if (checkUser) {
    res.status(400)
    throw new Error('User already exists')
  } else {
    const user = await User.create({
      username,
      password,
    })
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }
})

export { getAllUsers, authUser, registerUser }
