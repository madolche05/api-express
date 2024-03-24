const express = require('express');
const router = express.Router();
const postjobController = require('../controllers/postjobControllers');

router.get('/', postjobController.getjobs);
router.post('/insert', postjobController.insertjob);

module.exports = router
