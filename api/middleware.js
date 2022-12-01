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
     
module.exports = {
    properInsertion
};   