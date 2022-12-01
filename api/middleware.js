const db = require('../data/dbConfig'); //eslint-disable-line
const { getById } = require('./project/model')
                                  
const properInsertion = async (req,res,next) => {
    try{                          
        const { project_name } = req.body;
        if(                       
            !project_name
        ){                        
            res.status(404).json({
                status: 404,      
                message: 'Both project_name and project_description are required'
            })                    
        }                         
        else if (                 
            project_name.trim() === ''
        ){                        
            res.status(404).json({
                status: 404,      
                message: `Blank space isnt allowed for name and/or description`
            })             
        } else {           
            next()         
        }                  
    }                      
    catch(err){
        next(err)
    }
}    
     
const checkResource = async (req,res,next) => {
    try{
        const { resource_name } = req.body;
        if( !resource_name ){
            next({
                status: 404,
                message: 'resource name required'
            })
        } else if( resource_name.trim().length === 0){
            next({
                status: 404,
                message: 'not valid resource'
            })
        }
        else{
            next()
        }
    }
    catch(err){
        next(err)
    }
}

const checkTask = async (req,res,next) => {
    const { task_description, project_id } = req.body;
    try{
        if(!task_description){
            next({
                status: 400,
                message: 'Task Description required'
            })
        } else if(!project_id){
            next({
                status: 400,
                message: 'Project Id required'
            })
        } else {
            const validProj = await getById(project_id)
            if(!validProj[0]){
                next({
                    status: 404,
                    message: 'Project Id does not exist'
                })
            } else {
                next()
            }
        }
    }
    catch(err){
        next(err)
    }
}
module.exports = {
    properInsertion,
    checkResource,
    checkTask
};   