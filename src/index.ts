import express from 'express';
import path from 'path';
import morgan from 'morgan';

import routerUser from './routes/user';

const app = express();

app.listen(80, () => console.log('监听80'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev')); // 默认日志组件morgan
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
