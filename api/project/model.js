// build your `Project` model here
const db = require('../../data/dbConfig');

async function getAllProjects (){
    return db('projects')
}

module.exports = {
    getAllProjects
}