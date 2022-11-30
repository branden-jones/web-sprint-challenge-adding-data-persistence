
const projects = [
    { 
        project_name: 'Fix the attic',
        project_description: 'attic is unappealing and leaks hot air',
        project_completed: false
    },
    { 
        project_name: 'Fix foundation',
        project_description: 'parts of the house are unlevel',
        project_completed: false
    },
    { 
        project_name: 'Fix front stairs',
        project_description: 'tripping hazard',
        project_completed: false
    },
]
exports.projects = projects

exports.seed = function (knex) {
    return knex('projects').insert(projects)
}
// const resources = [
//     { 
//         resource_name: 'Fix the attic',
//         resource_description: 'attic is unappealing and leaks hot air',
//     },
//     { 
//         resource_name: 'Fix foundation',
//         resource_description: 'parts of the house are unlevel',
//     },
//     { 
//         resource_name: 'Fix front stairs',
//         resource_description: 'tripping hazard',
//     },
// ]
// exports.resources = resources

// exports.seed = function (knex) {
//     return knex('resources').insert(resources)
// }