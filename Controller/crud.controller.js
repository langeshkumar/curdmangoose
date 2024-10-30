import crudmodel from "../Model/crud.model.js";

export const crusRead = (req, res) => {
    res.send({ msg: "This is read..!" });
};

export const crudCreate = async (req, res) => {
    try {
        const crudInsert = new crudmodel({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description
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