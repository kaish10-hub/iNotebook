const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
};

module.exports = connectToMongo;