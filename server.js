const dbConnect=require("./config/db")
const express = require('express');
const dotenv = require("dotenv");

dotenv.config()


const app = express();

dbConnect()

app.use(express.json())



app.use('/api', require('./route'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
