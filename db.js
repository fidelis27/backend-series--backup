const mongoose = require('mongoose')

/* mongoose.connect('mongodb://localhost:27017/gerenciadorSeries',{useNewUrlParser:true}) */

/* mongoose.connect('mongodb+srv://thiago:thiago27@cluster0-6lenz.mongodb.net/gerenciadorSeries?retryWrites=true&w=majority',{ useNewUrlParser: true } ) */

console.log(process.env.MONGO_URL)
 mongoose.connect('process.env.MONGO_URL',{ useNewUrlParser: true }) 