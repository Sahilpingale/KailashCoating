import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  getAllUsers,
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js'

const router = express.Router()

router.get('/test', protect, admin, getAllUsers)
router.post('/login', authUser)
router.post('/register', registerUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router
