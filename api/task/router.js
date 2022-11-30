// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req,res,next) => {
    const task = await Task.getTask();
    if(task){
        res.status(200).json(task)
        next()
    } else {
        next({
            status: 400,
            message: 'Something went wrong grabbing your task'
        })
    }
})



module.exports = router