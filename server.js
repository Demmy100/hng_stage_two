const express = require("express")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")


const port = process.env.PORT || 4000

app.use(bodyParser.json())
//connection to database
mongoose
  .connect("mongodb+srv://demilade:0k4zYC4S8CD1cN4R@cluster0.tjqoz2d.mongodb.net/hng-person?retryWrites=true&w=majority")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server runing on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
app.use("/api", require("./routes/personRoute"))


//mongodb+srv://demilade:0k4zYC4S8CD1cN4R@cluster0.tjqoz2d.mongodb.net/hng-person?retryWrites=true&w=majority
//0k4zYC4S8CD1cN4R