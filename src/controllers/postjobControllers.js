const postjobService = require('../services/postjobService');

const getjobs = async (req, res) => {
    const jobs = await postjobService.getjobs();
    console.log(jobs);
}

const insertjob = async (req, res) => {
    const { title, description, company, location, salary, postedById, categoryId } = req.body;
    const job = await postjobService.insertJob(title, description, company, location, salary, postedById, categoryId);
    res.send(job);
    
}
module.exports = {
    getjobs,
    insertjob
}