

const requireDir = require('require-dir')
require('../db')
const mongoose = require('mongoose')

requireDir('../models/')
const Series = mongoose.model('Series')


module.exports = {
    async indexSeries(req, res) {
        const series= await Series.find()
        return res.json(series)        
    },   
    async showSeries(req, res) {
        const series= await Series.findById(req.params.id)
        return res.json(series)        
    }, 
    async showSeriesByGenre(req, res) {
        console.log('ola', req.params.genre)
        const series= await Series.find({genre:req.params.genre})
        console.log(series)
        
        return res.json(series)        
    }, 
    async updateSeries(req, res) {
        
        const serie = await Series.findOneAndUpdate(
            req.params.id,  {          
            name: req.body.name,
            status: req.body.status,
            genre: req.body.genre,
            comments: req.body.comments
        })
         return res.json(serie)       
    },   
    async storeSeries(req,res){
        const serie = await Series.create({
           name: req.body.name,
           status: req.body.status,
           genre: req.body.genre,
           comments:req.body.comments

        })
        return res.send(serie)
        
    },
    async removeSeries(req, res) {
        const series= await Series.findByIdAndRemove(req.params.id)
        return res.json(series)        
    }, 
    
}