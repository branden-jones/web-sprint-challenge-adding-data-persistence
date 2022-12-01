// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTask(){
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_notes',
            't.task_description',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        )
        .orderBy('p.project_id')
}

async function findById(task_id){
    const desiredTask = await db('tasks')
        .where({task_id})
    return desiredTask
}

async function addTask(task){ //eslint-disable-line
    const toBeInserted = await db('tasks')
        .insert(task)
    const [newTask] = await findById(toBeInserted);
    return newTask
}

module.exports = {
    getTask,
    addTask
}