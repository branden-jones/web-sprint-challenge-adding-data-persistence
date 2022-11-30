// build your `/api/projects` router here
const router = require('express').Router();
const Pro = require('./model');
const {
    properInsertion,
} = require('../middleware');

router.get('/', async (req,res,next) => {
    const list = await Pro.getAllProjects()
    if (list) {res.status(200).json(list)}
    else { 
        next({
            status: 400,
            message: 'could find any projects'
        })
    }
})

router.post('/', properInsertion, async (req,res,next) => {
    const didPost = await Pro.insertProject(req.body)
    if(didPost){
        const posts = await Pro.getAllProjects()
        res.status(201).json(posts)
    }
    else{
        next({
            status: 400,
            message: `your projects did not post`
        })
    }
})

module.exports = router