// build your `/api/projects` router here
const router = require('express').Router();
const Pro = require('./model');
const {
    properInsertion,
} = require('../middleware');

router.get('/', async (req,res,next) => {
    const list = await Pro.getAllProjects()
    if (list) {res.status(200).json(list.map(proj => {
        return {
            ...proj,
            project_completed: proj.project_completed ? true : false
        }
    }))}
    else { 
        next({
            status: 400,
            message: 'could find any projects'
        })
    }
})

router.post('/', properInsertion, async (req,res,next) => {
    try{ 
        const [ didPost ] = await Pro.insertProject(req.body)
        res.status(201).json({
            ...didPost,
            project_completed: didPost.project_completed ? true : false
        })
    } 
    catch(err){
        next(err)
    }
})

module.exports = router