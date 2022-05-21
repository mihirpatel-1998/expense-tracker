const express = require("express");
const userRoutes = require('./user')

const router = express.Router();

router.use('/api/user',userRoutes);

module.exports = router;
