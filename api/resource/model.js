// build your `Resource` model here
const db = require('../../data/dbConfig');

async function listResources(){
    const result = await db('resources')
    return result
}

// async function addResource(newResource){
//     const added = await db('resources')
//             .insert(newResource)
// }

module.exports = {
    listResources
};