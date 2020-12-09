const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
Todo.findByIdAndRemove('5fd06709963003c98e85ff19').then((todo) => {
    console.log(todo)
});