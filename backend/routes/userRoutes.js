import express from 'express'
import {
  getAllUsers,
  authUser,
  registerUser,
} from '../controllers/userController.js'

const router = express.Router()

router.get('/test', getAllUsers)
router.post('/login', authUser)
router.post('/register', registerUser)

export default router
