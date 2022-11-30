// build your `/api/projects` router here
const router = require('express').Router()
const Pro = require('./model')

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

module.exports = router