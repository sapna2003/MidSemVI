const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    heading:{
        type: String,
        trim:true,
        required:true
    },
    date:{
        type: Number,
        min:1
    },
    desc:{
        type: String,
        trim:true
    }
});

const Article = mongoose.model('Article',articleSchema);
module.exports = Article;