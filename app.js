const express = require('express');
// const { config } = require('./.sequelizerc');
const config = require('./config/config');
const mainRouter = require('./routes/main.router')

const app = express();

const port = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRouter);

app.listen(port, () => { console.log('*** PORT STARTED ***') });