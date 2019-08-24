const express = require('express')
const router = express.Router()  
const seriesControllers = require('../controllers/series')


 /* router.post('/serie', (req, res)=>{
     const produto = req.body
     console.log(produto)
     res.json(produto)

 }) */
 router.post('/serie/', seriesControllers.storeSeries)    
 router.get('/serie/:genre', seriesControllers.showSeriesByGenre)
 router.get('/serie/', seriesControllers.indexSeries)
 router.get('/serie/:id', seriesControllers.showSeries)
 
 router.put('/serie/:id', seriesControllers.updateSeries) 
 router.delete('/serie/:id', seriesControllers.removeSeries) 
 
 
 module.exports = router
