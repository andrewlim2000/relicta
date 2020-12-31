const express = require ('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(next)
})

router.post('/add', (req, res, next) => {
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router