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

server.use((err,req,res, next) => { // eslint-disable-line
    res.status(err.staus || 500).json({
        customMessage: 'Trouble grabbing Tasks',
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;
