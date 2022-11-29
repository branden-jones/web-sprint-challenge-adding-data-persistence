// build your `/api/resources` router here
const router = require('express').Router()

router.use((req,res, next) => {
    console.log(`Resource Router connected`)
})

module.exports = router