import { json } from "express";
import crudmodel from "../Model/crud.model.js";

export const crudRead = async (req, res) => {
    try {
        const getCrudData = await crudmodel.find();

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
            message: "Data Save Successfully..!",
            data: successmsg
        });
    } catch (error) {
        res.status(400).json({
            message: "Some think went wrong..!",
            error: error.message
        });
    }
};

export const crudUpdate = async (req, res) => {
    try {
        const updateId = req.params.id;
        const { name, age, description } = req.body;

        const crudUpdate = await crudmodel.findOneAndUpdate({ _id: updateId }, {
            name: name,
            age: age,
            description: description
        }, { new: true });

        res.status(201).json({
            message: "Data Upadted Successfully..!",
            data: crudUpdate
        });
    } catch (error) {
        res.status(401).json({
            message: "Some thing went wrong..!",
            error: error.message
        });
    }
};

export const crudDelete = async (req, res) => {
    try {
        const deleteId = req.params.id;

        const deleteData = await crudmodel.findOneAndDelete({ _id: deleteId });
        res.status(201).json({
            message: "Data Deleted Successfully..!",
            data: deleteData
        });
    } catch (error) {
        res.status(500).json({
            message: "Some think went wrong..!"
        });
    }
};
