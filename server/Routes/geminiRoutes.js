const express = require('express');
const {createResource,readResource,updateResource,deleteResource,} = require('../controllers/geminiController');
const authorizeUser = require("../middlewares/auth")

const router = express.Router();

router.post('/create',authorizeUser, createResource); 
router.get('/:id',authorizeUser, readResource); 
router.put('/:id',authorizeUser, updateResource); 
router.delete('/:id',authorizeUser, deleteResource); 

module.exports = router;
