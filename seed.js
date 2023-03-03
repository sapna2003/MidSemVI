const mongoose = require('mongoose');
const Article = require('./models/article');

const DUMMY_ARTICLE=[
    {
        heading:'Assam CM Sarma architect of NDA wins in Nagaland, Tripura',
        date:23/1/2001,
        desc:"GUWAHATI: NEDA convener and Assam CM Himanta Biswa Sarma on Tuesday predicted that NDA will retain power in the three NE states of Tripura, Nagaland and Meghalaya in the same way in did in 2018, which suggests a possible renewal of post-poll partnership between BJP and NPP in Meghalaya."
    },
    {
        heading:'Macbook Air',
        date:20/2/2021,
        desc:"GUWAHATI: NEDA convener and Assam CM Himanta Biswa Sarma on Tuesday predicted that NDA will retain power in the three NE states of Tripura, Nagaland and Meghalaya in the same way in did in 2018, which suggests a possible renewal of post-poll partnership between BJP and NPP in Meghalaya."
    },
    {
        heading:'Apple Watch Series-6',
        date:12/12/2022,
        desc:"GUWAHATI: NEDA convener and Assam CM Himanta Biswa Sarma on Tuesday predicted that NDA will retain power in the three NE states of Tripura, Nagaland and Meghalaya in the same way in did in 2018, which suggests a possible renewal of post-poll partnership between BJP and NPP in Meghalaya."
    },
    {
        heading:'Reebok Shoes',
        date:8/02/2005,
        desc:"GUWAHATI: NEDA convener and Assam CM Himanta Biswa Sarma on Tuesday predicted that NDA will retain power in the three NE states of Tripura, Nagaland and Meghalaya in the same way in did in 2018, which suggests a possible renewal of post-poll partnership between BJP and NPP in Meghalaya."
    },
    {
        name:'Jeans',
        price:20/4/1900,
        desc:"GUWAHATI: NEDA convener and Assam CM Himanta Biswa Sarma on Tuesday predicted that NDA will retain power in the three NE states of Tripura, Nagaland and Meghalaya in the same way in did in 2018, which suggests a possible renewal of post-poll partnership between BJP and NPP in Meghalaya."
    },
]

async function seedDB() {
    await Article.insertMany(DUMMY_ARTICLE);
    console.log('DB Seeded');
}
module.exports=seedDB;