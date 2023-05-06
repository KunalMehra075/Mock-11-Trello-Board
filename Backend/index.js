const express = require("express");
const cors = require("cors");
const connection = require("./Config/db");
const NoticeRouter = require("./Routes/Notice.route");
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json());
app.use("/notices", NoticeRouter)

app.get("/", (req, res) => {
    try {
        res.status(200).json({ Message: "Welcome to Trello Board React App Backend" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ Error: err })
    }
});


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (err) {
        console.log("Error connecting to DB");
    }
    console.log(`Server is Rocking on port ${process.env.PORT}`);
});
