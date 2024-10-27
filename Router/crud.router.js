import express from "express";

const router = express.Router();

// crud operations 

// crud Read process 
router.get('/', (req, res) => {
    res.send({ msg: "This is read..!" });
});

// crud create process 
router.post('/', (req, res) => {
    res.send({ msg: "This is create..!" });
});

// crud update process 
router.put('/:id', (req, res) => {
    res.send({ msg: "This is update..!" });
});

// crud delete process 
router.delete('/:id', (req, res) => {
    res.send({ msg: "This is delete..!" });
});

export default router;