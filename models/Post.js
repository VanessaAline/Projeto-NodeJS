const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,  //remove espaços do começo e fim da strting
        required: 'O post precisa de um título'
    },
    slug:String,
    body:{
        type:String,
        trim:true
    },
    tags:[String]
});

module.exports = mongoose.model('Post', postSchema);