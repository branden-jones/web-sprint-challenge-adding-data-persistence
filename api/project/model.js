// build your `Project` model here
const db = require('../../data/dbConfig');

async function getAllProjects (){
    return db('projects')
}

async function insertProject (project){
    return db('projects')
        .insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id',project_id)
                .first()
        })
}

module.exports = {
    getAllProjects,
    insertProject
}