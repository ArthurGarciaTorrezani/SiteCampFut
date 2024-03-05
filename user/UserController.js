const express = require("express");
const router = express.Router();

router.get("/createUser",(req,res)=>{
     res.render("user/newUser");
});

module.exports = router;