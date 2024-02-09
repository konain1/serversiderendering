

const mongoose = require('mongoose')

const shortidSchema = new mongoose.Schema({
    shortidURL :String,
    original:String
 

}

)


const shortURL =  mongoose.model('serverSideRendering' , shortidSchema);

// const schema = new Schema({ name: { type: String, unique: true } });
// const Customer = mongoose.model('Customer', schema);

module.exports = shortURL