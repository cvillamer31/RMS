const express = require("express");
const app = express();
const router = express.Router();

router.get("/", async(req, res) => {


    res.send("TEST");
})




module.exports = router