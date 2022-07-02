const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/todoList05");

//Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors())

const UserRoute = require("./routes/userRoute");

app.use("/users", UserRoute);

app.listen(5000);
