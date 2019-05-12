import 'babel-polyfill';
import { join } from 'path';
import morgan from 'morgan';
import process from 'process';
import express from 'express';
import bodyParser from 'body-parser';

import routers from './routers';
import { port, dbAddress } from './config';

const app = express();

// Static Files
app.use('/static', express.static(join(__dirname, './static')));

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('short'));
}

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 10000000 }));

// REST API
for (const router of routers) {
  app.use(router);
}

// Port
app.listen(port);
