// build your `/api/resources` router here
const router = require('express').Router();
const Reso = require('./model');
const {
    checkResource
} = require('../middleware');

router.get('/', async (req,res, next) => {
    const result = await Reso.listResources()
    if(result){
        res.status(200).json(result)
    } else{
        next()
    }
})

router.post('/', checkResource, async (req,res,next) => {
    const doesItExist = await Reso.doesNameExist(req.body.resource_name)
    if (!doesItExist){
        const [result] = await Reso.addResource(req.body);
        res.status(201).json(result)
    } else{
        next({
            status: 404,
            message: 'resource already exists'
        })
    }
})

module.exports = router