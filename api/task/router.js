// build your `/api/tasks` router here
const router = require('express').Router()

router.use((req,res, next) => {
    console.log(`Task Router connected`)
})

module.exports = router