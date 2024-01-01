const express=require('express')
const router=express.Router()
const axios = require('axios');

router.get('/',async(req,res)=>{
    try {
        const newapi=await axios.get('https://newsapi.org/v2/everything?q=all&from=2023-12-01&sortBy=publishedAt&apiKey=594fc0104ed242be94c215d3f5d47414')
        const articles=newapi.data.articles
        console.log(articles);
        res.render('news',{articles})
    } catch (error) {
        
    }
    
})

module.exports=router