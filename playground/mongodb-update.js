const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to cunnect to mongoDB server');
    }
    console.log('Connected to  mongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5fc9f965963003c98e85a746')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('user').findOneAndUpdate({
        _id:123
    }, {
        $set: {
            name: 'divya'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});