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

async function addTask(task){ //eslint-disable-line
    return db('tasks')
}


//task needs to join with project
// and should include project_name and project_description
module.exports = {
    getTask,
    addTask
}