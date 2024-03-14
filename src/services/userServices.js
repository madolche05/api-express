const prisma = require('../config/database');

const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const getUserbyname = async (name) => {
    const user = await prisma.user.findFirst({
        where: {
            name
        }
    });
    return user;
}

const insertUser = async (name, email, password) => {
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
    return user;
}

const updateUser = async (id, name, email, password) => {
    const user = await prisma.user.update({
        where: {
            id
        },
        data: {
            name,
            email,
            password
        }
    });
    return user;
}






module.exports = {
    getUsers,
    getUserbyname,
    insertUser,
    loginUser,
    updateUser
}
