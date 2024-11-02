import crudmodel from "../Model/crud.model.js";

export const crusRead = async (req, res) => {
    try {
        const { name, age } = req.body;

        if (!name && !age) {
            res.status(401).json({ message: "Atleast one data required..!" });
        }

        const query = {};
        if (name) query.name = name;
        if (age) query.age = age;

        const getCrudData = await crudmodel.find(query);

        res.json(getCrudData);

    } catch (error) {
        res.status(400).json({
            message: "Some think went wrong..!",
            error: error.message
        });
    }
};

export const crudCreate = async (req, res) => {
    try {
        const { name, age, description } = req.body;

        const crudInsert = new crudmodel({
            name: name,
            age: age,
            description: description
        });
        const successmsg = await crudInsert.save();

        res.status(201).json({
            message: "Data Dave Successfully..!",
            data: successmsg
        });
    } catch (error) {
        res.status(400).json({
            message: "Some think went wrong..!",
            error: error.message
        });
    }
};

export const crudUpdate = (req, res) => {
    res.send({ msg: "This is update..!" });
};

export const crudDelete = (req, res) => {
    res.send({ msg: "This is delete..!" });
};