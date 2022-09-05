// Use "type: "module" in package.json to use 'import'
import express from 'express'
import color from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

// Configure Environment variables
dotenv.config()

const app = express()

// Connect to mongodb database
connectDB()

// In order to use 'req.body'
app.use(express.json())

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
