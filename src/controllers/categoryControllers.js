const categoryservice = require('../services/categoryService');

const insertCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await categoryservice.insertCategory(name);
        res.status(201).send({ message: 'Category inserted successfully', category });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error inserting category', error });
    }
}


const getCategories = async (req, res) => {
    try {
        const categories = await categoryservice.getCategories();
        res.status(200).send(categories);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error getting categories', error });
    }
}



const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryservice.deleteCategory(id);
        if (!category) {
            res.status(404).send({ message: 'Category not found' });
            return;
        }
        res.status(200).send({ message: 'Category deleted successfully', category });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error deleting category', error });
    }
}


const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const category = await categoryservice.updateCategory(id, name);
        if (!category) {
            res.status(404).send({ message: 'Category not found' });
            return;
        }
        res.status(200).send({ message: 'Category updated successfully', category });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error updating category', error });
    }
}


module.exports = {
    insertCategory,
    getCategories,
    deleteCategory,
    updateCategory
    
}