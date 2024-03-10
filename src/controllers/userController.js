const userService = require('../services/userServices');

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting users');
    }
}

const getUserbyname = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await userService.getUserbyname(name);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting user');
    }
}

const insertUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userService.insertUser(name, email, password);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting user');
    }
}

module.exports = {
    getUsers,
    getUserbyname,
    insertUser
}
