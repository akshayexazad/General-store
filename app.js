const express = require('express');
const app = express();
let bodyparser =require('body-parser')
const path = require('path')
const User = require('./model/usertable');

const userRoutes=require('./router/route')

app.use(express.static('view'));

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));


app.use('/',userRoutes)




// User.sync().then(()=>{
//     console.log('connection okk');
//   }).catch((err)=>{
//     console.log(err);
//   })

app.listen(5001,(req,res)=>{
    console.log('aap is running')
})
