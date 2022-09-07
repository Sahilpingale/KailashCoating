// Use "type: "module" in package.json to use 'import'
import express from 'express'
import color from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, pageNotFound } from './middleware/errorMiddleware.js'

// Configure Environment variables
dotenv.config()

const app = express()

// Connect to mongodb database
connectDB()

// In order to use 'req.body'
app.use(express.json())

// Routes
app.use('/api/users', userRoutes)

// Middleware
app.use(errorHandler)
app.use(pageNotFound)

// Server Test
app.get('/', (req, res) => {
  res.send('Api is running')
})

const PORT = 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
