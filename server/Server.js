const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const app = express();
const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://todoapp-daveprayag.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

mongoose.connect(
  "mongodb+srv://prayagdave:<pdmongodbadmin28..>@cluster0.mnbesg4.mongodb.net/todo?retryWrites=true&w=majority"
);

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));
