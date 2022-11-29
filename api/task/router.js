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

router.use((err,req,res, next) => { // eslint-disable-line
    res.status(err.staus || 500).json({
        customMessage: 'Trouble grabbing Tasks',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router