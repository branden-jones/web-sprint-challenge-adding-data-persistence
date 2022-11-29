// build your `/api/projects` router here
const router = require('express').Router()

router.use((req,res, next) => {
    console.log(`Projects Router connected`)
})

module.exports = router