// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTask(){
    return db('tasks')
}

module.exports = {
    getTask,
}