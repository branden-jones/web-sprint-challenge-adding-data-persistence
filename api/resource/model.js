// build your `Resource` model here
const db = require('../../data/dbConfig');

async function listResources(){
    const result = await db('resources')
    return result
}

async function specificResource(resource_id){
    return db('resources')
            .where({resource_id})
}

async function doesNameExist(resource_name){
    const [checkRes] = await db('resources')
        .where({resource_name})
    return !!checkRes
}

async function addResource(newResource){
    const [ added ] = await db('resources')
            .insert(newResource)
    return specificResource(added)
}

module.exports = {
    listResources,
    addResource,
    doesNameExist,
};

// if(newResource.project_id){
    //     const validProjCheck = await getById(newResource.project_id)
        // if(validProjCheck){
        //     const projectAssignment = await insertIntoProjReso(newResource.project_id)
        // }
    // }