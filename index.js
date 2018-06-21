import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import morgan from 'morgan';

import User from './app/models/user';
import {getUsers, getUser, postUser, deleteUser} from './app/routes/user';

const app = express();
const port = process.env.PORT || 8080;

const options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMSL:30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMSL: 30000
        }
    }
};

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost', options);

// const db = mongoose.connection;

// db.on('error',console.error.bind(console,'connection error:'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public/dist'));

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Origins, X-Requested-With, Content-Type, Accept');
    next();
});

app.route('/user')
    .post(postUser)
    .get(getUsers);
app.route('/users/:id')
    .get(getUser)
    .delete(deleteUser);

app.route('*').get((req, res)=>{
    res.sendFile('public/dist/index.html',
    {
        root: __dirname
    });
});

app.listen(port);

console.log(`app running on port: ${port}`);