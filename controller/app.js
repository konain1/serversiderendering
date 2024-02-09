
const express = require('express')
let ids = require('short-id');
let shortURL = require('../model/app')


async function HandlerGetRequest(req,res){


    let urlfromserver = await shortURL.find();
    // console.log(urlfromserver)
    res.render('home' ,{
        urlfromserver
    })
}


async function GenereateShortId(req,res){

    let url = req.body.url

    let shortID = ids.generate();

    await shortURL.create({
        shortidURL :shortID,
        original:url
        
    })

    res.json({shortID:shortID})
}


module.exports = {GenereateShortId,HandlerGetRequest}