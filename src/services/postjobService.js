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

const getJobs = async (filters = {}) => {
    const where = Object.keys(filters).reduce((acc, key) => {
        if(filters[key] && typeof filters[key] === 'string'){
            if(key === 'salary'){
                acc[key] = { equals: parseInt(filters[key], 10) };
            }else{
                acc[key] = { contains: filters[key] };
            }
        }
        return acc;
    }, {});

    const jobs = await prisma.job.findMany({
        where,
        include: {
            postedBy: true, // assuming 'postedById' is the foreign key to 'User' model
            category: true // assuming 'categoryId' is the foreign key to 'Category' model
        }
    });
    return jobs;
}

const updateJob = async (jobId, title, description, company, location, salary, postedById, categoryId) => {
    try {
        const job = await prisma.job.update({
            where: {
                id: parseInt(jobId)
            },
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
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports = {
    insertJob,
    getJobs
}