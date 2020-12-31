const express = require('express')
const mongoose = require('mongoose')

const usersRouter = require('./routes/users');

require('dotenv').config()

const app = express()
app.use(express.json());

const port = process.env.PORT || 5000

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});