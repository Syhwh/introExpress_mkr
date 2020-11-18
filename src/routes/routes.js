const { Router } = require('express');
const router = Router();

const { getUsers, saveUser, getUser, deleteUser, home } = require('../controllers/controllers');

router.get('/users', getUsers)

router.post('/users', saveUser)

router.get('/users/:id', getUser)

router.delete('/users/:id', deleteUser)

router.get('/', home)

module.exports = router