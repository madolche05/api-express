const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:name', userController.getUserbyname);
router.post('/', userController.insertUser);

module.exports = router
