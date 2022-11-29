// build your server here and require it from index.js
const express = require('express');
const taskRouter = require('./task/router');
const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');


const server = express();

server.use(express.json());

server.use('/api/tasks', taskRouter);
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter)

server.use('*', (req,res) => {
    res.json({
        api: 'not supposed to be here'
    })
});

module.exports = server;
