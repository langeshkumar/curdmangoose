import express from "express";
import { crudCreate, crudDelete, crudUpdate, crusRead } from "../Controller/crud.controller.js";

const router = express.Router();

// crud operations 

// crud Read process 
router.get('/', crusRead);

// crud create process 
router.post('/', crudCreate);

// crud update process 
router.put('/:id', crudUpdate);

// crud delete process 
router.delete('/:id', crudDelete);

export default router;