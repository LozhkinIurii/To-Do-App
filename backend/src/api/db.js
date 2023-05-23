const mongoose = require('mongoose');

const connectDB = async()=>{
        await mongoose.connect(`mongodb://172.16.5.121:27017/`, { useNewUrlParser: true});    
}

module.exports = connectDB