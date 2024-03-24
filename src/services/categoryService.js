const prisma = require('../config/database');

const insertCategory = async (name) => {
    const category = await prisma.category.create({
        data: {
            name
        }
    });
    return category;
}

const getCategories = async () => {
    const categories = await prisma.category.findMany();
    return categories;
}


const updateCategory = async (id, name) => {
    const category = await prisma.category.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name
        }
    });
    return category;
}

const deleteCategory = async (id) => {
    const category = await prisma.category.delete({
        where: {
            id
        }
    });
    return category;
}
module.exports = {
    insertCategory,
    getCategories,
    updateCategory,
    deleteCategory
}