const express = require("express");
const placeController = require("../controllers/place");
const router = express.Router();

router.get("/popular", placeController.getPopularPlace);

module.exports = router;
