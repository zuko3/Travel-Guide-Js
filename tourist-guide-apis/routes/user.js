const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.post("/login", adminController.doUserLogin)
router.post("/add-user", adminController.createUser)

module.exports = router;
