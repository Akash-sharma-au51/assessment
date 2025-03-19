const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Usermodal');
const { JWT_SECRET } = require('../config');


const auhourizeUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}
module.exports = auhourizeUser;
