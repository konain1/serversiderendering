

const express = require('express')
const {GenereateShortId,HandlerGetRequest} = require('../controller/app')

const route = express.Router();


route.get('/',HandlerGetRequest);

route.post('/',GenereateShortId)



module.exports = route