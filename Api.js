
 
 
const express = require('express')
const routesSeries = require('./routes/series')
const routesGenres = require('./routes/genres')
const server = express ()
const bodyParser = require('body-parser')

// bodyParser utilizado quando irá remeter formulario via url
server.use(bodyParser.urlencoded({extended:true}))
//express.json utlizado para remter dados json
server.use(express.json())
//express.text utilizado para enviar dados text
server.use(express.text())

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
  })
server.use(routesGenres)
server.use(routesSeries)




server.listen(process.env.PORT || 3333)
module.exports= server
