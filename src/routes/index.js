let express = require("express");
let router = express.Router();

router.get("/", function(req, res){
    res.render("index", {title: "Digtal movies"})
})

module.exports = router;