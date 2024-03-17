const prisma = require('../config/database');

const insertJob = async (title, description, company, location, salary, postedById, categoryId) => {
    const job = await prisma.job.create({
        data: {
            title,
            description,
            company,
            location,
            salary,
            postedById,
            categoryId
        }
    });
    return job;
}

const getjobs = async () => {
    const jobs = await prisma.job.findMany({
        include: {
            postedBy: true, // assuming 'postedById' is the foreign key to 'User' model
            category: true // assuming 'categoryId' is the foreign key to 'Category' model
        }
    });
    return jobs;
}

module.exports = {
    insertJob,
    getjobs
}