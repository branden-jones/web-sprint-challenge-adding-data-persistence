
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

const resources = [
    { 
        resource_name: 'Home Depot',
        resource_description: 'insullation and plastic can be round here',
    },
    { 
        resource_name: 'Crawlspace Ninja',
        resource_description: 'they are foundation and crawlspace pros',
    },
    { 
        resource_name: 'Kevin',
        resource_description: 'Hes a hard working functioning alcoholic',
    },
]

const tasks = [
    { 
        project_id: 1,
        task_notes: 'insulation will cost $900',
        task_description: 'get insulation and place in attic',
    },
    { 
        project_id: 1,
        task_notes: 'should already be done but just in case',
        task_description: 'vaccum attic slots',
    },
    { 
        project_id: 1,
        task_description: 'glue plastic',
    },
    { 
        project_id: 2,
        task_notes: 'get a quote',
        task_description: 'call Ninjas',
    },
    { 
        project_id: 2,
        task_notes: 'maybe just to in-laws or smiths',
        task_description: 'if quote is reasonable, plan vacay during time',
    },
    { 
        project_id: 2,
        task_notes: 'cause a new house would be sweet!',
        task_description: 'if not reasonable, incognito google/youtbue arson skills',
    },
    { 
        project_id: 3,
        task_notes: 'maybe youtube DIY options',
        task_description: 'kevin is drunk so find someone else',
    },
    { 
        project_id: 3,
        task_notes: 'cant say i didnt try',
        task_description: 'get professional cause your trash at concrete',
    },
    { 
        project_id: 3,
        task_notes: 'maybe even an escalator... for grandma of course',
        task_description: 'plan to install wires, lights and handrail within new stairs',
    },
]
   
const projects_and_resources = [
    {project_id: 1, resource_id: 1 },
    {project_id: 2, resource_id: 1 },
    {project_id: 3, resource_id: 1 },
    {project_id: 2, resource_id: 2 },
    {project_id: 3, resource_id: 3 },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_and_resources').insert(projects_and_resources)
}
