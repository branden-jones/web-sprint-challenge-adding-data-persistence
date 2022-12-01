// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const { checkTask } = require('../middleware');


router.get('/', async (req,res,next) => {
    const task = await Task.getTask();
    if(task){
        res.status(200).json(task.map((tsk) => {
            return {
                ...tsk,
                task_completed: tsk.task_completed ? true : false
            }
        }))
    } else {
        next({
            status: 400,
            message: 'Something went wrong grabbing your task'
        })
    }
})

router.post('/', checkTask, async (req,res,next) => {
    const newTask = await Task.addTask(req.body)
    if(newTask){
        res.status(201).json({
                ...newTask,
                task_completed: newTask.task_completed ? true : false
        })
    } else {
        next()
    }
})


module.exports = router