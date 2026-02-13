const express = require("express");
const router = express.Router();


// router.get('/', (req, res) => {
//     res.send("Hello world using Router")
// });

router.route("/").get((req, res) => {
    res.status(200)
    .send("Welecome to the Landing page");
});

router.route('/login').get((req, res) => {
    res
        .status(200)
        .send("Welcome to Login page.");
});

router.route 
module.exports = router;