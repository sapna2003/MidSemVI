const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/articles',async(req,res)=>{
    const articles = await Article.find({});
    //console.log(article);
    res.render('index',{articles});
});


router.get('/articles/new',(req,res)=>{
    res.render('new');
})

//creating the products in the db
router.post('/articles',async(req,res)=>{
    const{heading,date,desc}=req.body;
    await Article.create({heading,date,desc});
    res.redirect('/articles');
})

router.get('/articles/:articleid',async(req,res)=>{
    const{articleid} = req.params;
    const article=await Article.findById(articleid);
    res.render('show',{article});
})

//Render the edit form prefilled with the product data
router.get('/articles/:articleid/edit',async(req,res)=>{
    const {articleid} = req.params;
    const article = await Article.findById(articletid);
    res.render('edit',{article});
});

router.patch('/articles/:articleid',async(req,res)=>{
    const { articleid } = req.params;
    const { name,price,desc } = req.body;
    await Article.findByIdAndUpdate(articleid,{heading,date,desc});
    res.redirect(`/articles/${articleid}`);
})

router.delete('/articles/:articleid',async(req,res)=>{
    const { articleid } = req.params;
    await Article.findByIdAndDelete(articleid);
    res.redirect('/articles');
})
module.exports = router;