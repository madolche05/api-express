const postjobService = require('../services/postjobService');

const getjobs = async (req, res) => {
    const filters = req.query;
    let jobs;
    try {
        jobs = await postjobService.getJobs(filters);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error getting jobs');
    }
    res.send(jobs);
}


const insertjob = async (req, res) => {
    try {
        const { title, description, company, location, salary, postedById, categoryId } = req.body;
        const job = await postjobService.insertJob(title, description, company, location, salary, postedById, categoryId);
        res.send(job);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
module.exports = {
    getjobs,
    insertjob
}