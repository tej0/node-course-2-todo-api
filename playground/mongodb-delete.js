const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unsble to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text:'eat brakfast'}).then((result)=>{
    //     console.log(result);
    // })
    //delete One
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed:false }).then((result) => {
    //     console.log(result);
    // });
    //db.close();

    db.collection('user').deleteMany({name:'div' }).then((result) => {
        console.log(result);
    });
    db.collection('user').findOneAndDelete({_id:new ObjectID("5fc9da45d7e7a11b38fa102d")}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })
});