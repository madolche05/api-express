const express = require('express');
const router = express.Router();
const categorycontroller = require('../controllers/categoryControllers');
router.post('/insert', categorycontroller.insertCategory);

router.get('/', categorycontroller.getCategories);

router.delete('/:id', categorycontroller.deleteCategory);

router.put('/:id', categorycontroller.updateCategory);
module.exports = router