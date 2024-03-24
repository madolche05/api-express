const categoryservice = require('../services/categoryService');

const insertCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await categoryservice.insertCategory(name);
        res.send(category);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

module.exports = {
    insertCategory
}