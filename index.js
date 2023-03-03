const express = require('express');
const app = express();
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/articleApp')
.then(()=>console.log('DB Connected'))
.catch((err)=>console.log(err));

//Routes

const articleRoutes = require('./routes/articleRoutes');

//seed the db with the dummy products
//seedDB();
app.use(articleRoutes);

app.get('/',(req,res)=>{
    res.send('Connected');
})

app.listen(8000,(req,res)=>{
    console.log('Running at port');
})