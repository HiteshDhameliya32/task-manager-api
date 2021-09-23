//  const mongodb = require('mongodb')
//  const MongoClient = mongodb.MongoClient
//  const objectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = "mongodb://localhost:27017"
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
       return console.log('Unable to connect to database !')
    }


    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Hitesh',
        age: 27
    }, (error ,result) => {
        if(error){
            return console.log('Unable to insert user')
        }

        console.log(result.ops)  
    })

    db.collection('users').insertMany([
        {
            name: 'Priyanka',
            age: 28
        },
        {
            name: 'Sumit',
            age: 24
        }
    ],  (error ,result) => {
        if(error){
            return console.log('Unable to insert user')
        }

        console.log(result.ops)  
    })

    db.collection('tasks').insertMany([
        {
            desc: 'Clean the house',
            completed: true
        },
        {
            desc: 'Renew inspection',
            completed: false
        },
        {
            desc: 'pot plants',
            completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to connect server!')
        }

        console.log(result.ops)
    })


    db.collection('users').findOne({_id: new ObjectId("613a33225fb4b857482cec8b")}, (erroe, user) => {
        if(error) {
            return console.log('Unablr to featch')
        }
        console.log(user)
    })

    db.collection('users').find({ age: 27}).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27}).count((error, users) => {
        console.log(users)
    })

    db.collection('tasks').findOne({_id: new ObjectId("613a36b095eaf39fe45930de")}, (erroe, task) => {
        if(error) {
            return console.log('Unablr to featch')
        }
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        console.log(task)
    })

    db.collection('users').updateOne({
        _id: new ObjectId("613a33225fb4b857482cec8b")
    },{
        $set: {
            name: 'Neev'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateOne({
        completed: false
    },{
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age:27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteMany({
        desc: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})