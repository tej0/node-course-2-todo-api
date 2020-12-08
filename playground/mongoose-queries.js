const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

var id = '5fcf0c734ce2570294c887f5';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todos);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));
var id_user='5fccae3e07fc4a2de0da9324';
User.findById(id_user).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User by Id', user);
}).catch((e) => console.log(e));