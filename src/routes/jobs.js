const express = require('express');
const router = express.Router();
const postjobController = require('../controllers/postjobControllers');

router.get('/', postjobController.getjobs);
router.post('/insert', postjobController.insertjob);
router.put('/update/:id', postjobController.updateJob);
router.delete('/delete/:id', postjobController.deleteJob);
module.exports = router
