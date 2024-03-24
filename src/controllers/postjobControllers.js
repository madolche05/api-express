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
        res.status(201).send({ message: 'Job inserted succesfully', job });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error inserting job', error });
    }
}


const updateJob = async (req, res) => {
    const { id } = req.params;
    const { title, description, company, location, salary, postedById, categoryId } = req.body;
    try {
        const job = await postjobService.updateJob(id, title, description, company, location, salary, postedById, categoryId);
        if (!job) return res.status(404).send('Job not found');
        res.status(200).send({ message: 'Job updated succesfully', job });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error updating job', error });
    }
}


const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await postjobService.DeleteJob(id);
        if (!job) return res.status(404).send('Job not found');
        res.status(200).send({ message: 'Job deleted succesfully', job });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error deleting job', error });
    }
}



module.exports = {
    getjobs,
    insertjob,
    updateJob,
    deleteJob
}