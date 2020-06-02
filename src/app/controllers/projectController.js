const express = require('express');
const authMiddleware = require('../middlewares/auth');
const Project = require('../models/project');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const listProject = await Project.find().populate('user');
        res.send({ listProject });
    } catch (error) {
        res.status(400).send({ error: 'Error loading new project' });
    }

});

router.get('/:projectId', async(req, res) => {
    try {
        project = await Project.findById(req.params.projectId).populate('user');
        res.send({ project });
    } catch (err) {
        return res.send(400).send({ error: 'Error loading project' });
    }
});

router.post('/', async(req, res) => {
    try {
        const { title, description } = req.body
        const project = await Project.create({ title, description, user: req.userId });

        await project.save();

        return res.send({ project });
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: 'Error creating new project' });
    }
});

router.put('/:projectId', async(req, res) => {
    try {
        const { title, description } = req.body
        const project = await Project.findOneAndUpdate(req.params.projectId, {
            title,
            description,
        }, { new: true });

        await project.save();

        return res.send({ project });
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: 'Error creating new project' });
    }
});


router.delete('/:projectId', async(req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.projectId);

        res.send();
    } catch (err) {
        console.log(err)
        res.status(400).send({ error: 'Project is not delete, try again' });
    }

});

module.exports = app => app.use('/projects', router);