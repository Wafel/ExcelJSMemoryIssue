const express = require('express');
const app = express();

const memoryIssueRouter = require('./routes/memory-issue');
const noMemoryIssueRouter = require('./routes/no-memory-issue');

app.use(require('express-status-monitor')());
app.use('/', memoryIssueRouter);
app.use('/', noMemoryIssueRouter);

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send(err.message);
});

module.exports = app;
