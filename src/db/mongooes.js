const mongooes = require('mongoose')
const validator = require('validator')

console.log(process.env.MONGODB_URL)

mongooes.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
    //useCreateIndex: true,
    //useFindAndModify: false
})

// const me = new User({
//     name:'Janvi',
//     age: 4,
//     email: 'janvi@gmail.com',
//     password: '     janvi123   '
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const task = new Task({
//     desc: '    Eat lunch  '
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })