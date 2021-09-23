const express = require('express')
const jwt = require('jsonwebtoken')
const multer = require('multer')

require('./db/mongooes')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT 

const upload = multer ({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        
        if(!file.originalname.match(/\.(pdf)$/)) {
            return cb(new Error('Please upload a PDF'))
        }

        cb(undefined, true)
        
        // cb(new Error ('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET requests are disable now')
//     } else {
//         next()
//     }
// })

//site is in maintainans
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// }) 


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('server is up on port!' + port)
})


// const myfun = async () => {
//     const task = await Task.findById('6145d8ef6293d0d14e150b22')
//     await task.populate('owner')
//     console.log(task.owner)
// }

//myfun()


