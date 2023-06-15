import express from "express";
import bodyParser from "body-parser";

const app = express()
const PORT = 1337

// Middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server is running on PORT ${1337}`)
})