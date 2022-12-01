// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  return db("projects");
}

async function getById(project_id){
    const result = await db('projects')
        .where({project_id})
    return result
}

async function insertProject(project) {
    const [ result ] = await db("projects").insert(project);
  return await getById(result)
}

module.exports = {
  getAllProjects,
  insertProject,
  getById
};
