import express from 'express';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';

import config from './config/index';
import routerUser from './routes/user';

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.listen(config.serverListen, () => console.log(`开始监听端口：${config.serverListen}`));
app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('short', {stream: accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', 'Express');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/api/user', routerUser);
