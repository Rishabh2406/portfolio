const express = require('express');

const app = express();

const Query = require('./models/query');

app.post("http://localhost:3000/contact", (req, res, next) => { 
    const query = new Query({
        name:req.body.name,
        email:req.body.email,
        number: req.body.number,
        query:req.body.query,
    });
    query.save().then(()=>{
        res.status(201).json({
            message:"query saved successfully",
        })
    })
})

module.exports = app;
