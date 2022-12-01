const db = require('../data/dbConfig'); //eslint-disable-line
                                  
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
    //description and notes are required
    //project id is foreign key
    next()
}
module.exports = {
    properInsertion,
    checkResource,
    checkTask
};   