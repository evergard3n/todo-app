const mongoose = require('mongoose')
const connectDb = async() => {
    try {
        const connect = await mongoose.connect("mongodb+srv://admin:evergarden@cluster0.v8dzmfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to db, ", connect.connection.host,connect.connection.name);
    } catch (err) {
        console.log(err);
        
    }
}
module.exports = connectDb;