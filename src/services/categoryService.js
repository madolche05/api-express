const prisma = require('../config/database');

const insertCategory = async (name) => {
    const category = await prisma.category.create({
        data: {
            name
        }
    });
    return category;
}

module.exports = {
    insertCategory
}