require('dotenv').config();
const express = require('express'); 
const path = require('path');
const cors = require('cors');
const app = require('');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500; 


// connect to mongo database  
connectDB();

//Listen only if MongoDB connects
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    //might need to adjust this depending on how server is built
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
