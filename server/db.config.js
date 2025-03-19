const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('MongoDB connection failed!');
        console.log(error);
    }
}
module.exports = connectDB;