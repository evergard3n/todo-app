const express = require('express');
const connectDb = require('./dbCon');

const app = express();
connectDb();

const PORT = process.env.PORT || 5000;
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use (require("./routes/index"));
app.use(require("./routes/todo"))

app.listen(PORT, console.log(`server on port ${PORT}`))