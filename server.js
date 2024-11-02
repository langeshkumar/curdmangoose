import express, { urlencoded } from "express";
import router from "./Router/crud.router.js";
import dbConnection from "./lib/dataBase.js";

const app = express();
const PORT = "8080";

// understand json request in postman
app.use(express.json());

// understand urlencoded request in postman
app.use(express.urlencoded({ extended: true }));

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

