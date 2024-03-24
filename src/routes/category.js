const express = require('express');
const router = express.Router();
const categorycontroller = require('../controllers/categoryControllers');
router.post('/insert', categorycontroller.insertCategory);

module.exports = router