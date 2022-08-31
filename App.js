const express = require('express');
const mongoose = require('mongoose');
const App = express()
require("dotenv").config();
const PORT = process.env.PORT || 7000
const cors = require("cors")
const todoRouter = require('../server/routes/todorouter')

App.use(express.json())
App.use(cors())
// App.use(require('./routes/auth'))
App.use(todoRouter)




mongoose.connect(process.env.url)
.then(()=>{
    App.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}...`);
        console.log('db connected');
    })
})
.catch((err)=> console.log(err))
























// App.get('/create-cookies', (req, res)=>{
//     res.setHeader('set-cookie', 'currentuser= true');
//     res.cookie('currentuser', false);
//     res.cookie('admin', false)
//     // createToken(id)
//     // res.cookie('jwt', toke, {maxAge})
//     res.cookie('notadmin', true, {maxAge: 24 * 60 * 60 * 1000, httpOnly: true})
//     res.send('Current user is set')
// })

// App.get('/get-cookies', (req, res)=>{
//     const cookies = req.cookies;
//     console.log(cookies);
//     res.json(cookies)
// })


// App.use(newRoutes);
// App.use('*', (req, res)=>{
//     res.render('error')
// })








// App.use(express.static('Public'))
// App.use(express.urlencoded({extended: true}))
//const url = 'mongodb+srv://jerr49:NewEra2020@jerrycluster.scuifuy.mongodb.net/?retryWrites=true&w=majority';
// const mongoose = require('mongoose');
// const userRoutes = require("./routes/users")



