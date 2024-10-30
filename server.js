import express from "express";
import router from "./Router/crud.router.js";
import dbConnection from "./lib/dataBase.js";

const app = express();
const PORT = "8080";

app.use(express.json());

// calling mangoose database
dbConnection();

// sample route and controller 
app.get("/", (req, res) => {
    res.json({ msg: "Show Successfully..!" });
});

// calling router page 
app.use('/crud', router);


app.listen(PORT, () => {
    console.log(`Server is getting ready to http://localhost:${PORT}`);
});

