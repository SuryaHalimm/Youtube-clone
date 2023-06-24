const express = require('express');
const route = require('./routes/route.js');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

mongoose.connect(
    'mongodb+srv://kelvin:tugasyoutube@Cluster0.mx0hj2d.mongodb.net/kaep-mongo?retryWrites=true&w=majority'
)

const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err.message)
});
db.once('open', () => {
    console.log('You are Connected to MongoDB server');
});

app.use(express());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(cors());

app.set('view engine', 'ejs');
app.use(route);

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`Server started at PORT ${process.env.PORT}`);
    }
});