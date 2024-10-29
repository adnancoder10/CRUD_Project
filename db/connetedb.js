const Mongoose = require('mongoose')

const ConnectDb = async (URL)=>{
    Mongoose.connect(URL).then(()=>{
        console.log("Mongoodb server connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = ConnectDb

