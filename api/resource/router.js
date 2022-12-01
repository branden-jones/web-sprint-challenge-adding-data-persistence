// build your `/api/resources` router here
const router = require('express').Router();
const Reso = require('./model');
const {
    properInsertion   //eslint-disable-line
} = require('../middleware');

router.get('/', async (req,res, next) => {
    const result = await Reso.listResources()
    if(result){
        res.status(200).json(result)
    } else{
        next()
    }
})

module.exports = router