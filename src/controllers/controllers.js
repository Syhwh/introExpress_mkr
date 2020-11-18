const db = require('../db/data');


const getUsers = (req, res) => {
  // console.log(db)
  res.render('user', { db })
}

const saveUser = (req, res) => {
  const user = {
    id: db.length,
    name: req.body.name
  }
  db.push(user)
  res.render('greetings', req.body)
}

const getUser = (req, res) => {
  console.log(req.params)
  const { id } = req.params
  const user = db.filter((user) => user.id === parseInt(id))
  console.log(user[0])
  res.render('existingUser', { name: user[0].name })
}

const deleteUser = (req, res) => {
  res.render('')
}

const home = (req, res) => {
  res.render('home')
}

module.exports = {
  getUsers, saveUser, getUser, deleteUser, home
}