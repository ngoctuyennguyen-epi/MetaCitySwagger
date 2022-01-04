const express = require("express");
const router = express.Router();
const Moralis = require('moralis/node');

router.get('/login', async function (req, res, next) {
    try {
        const user = await Moralis.User.logIn("swagger@gmail.com", "Abc12345@@");
    } catch (e) {
        console.log(e.message);
    }
    return res.send({a: 1});
});

router.get('/signup', async function (req, res, next) {
    const user = new Moralis.User();
    user.set("username", "swagger@gmail.com");
    user.set("password", "Abc12345@@");
    user.set("email", "swagger@gmail.com");

    try {
        await user.signUp();
        // Hooray! Let them use the app now.
        console.log('Signup successful');
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        console.log("Error: " + error.code + " " + error.message);
    }
    return res.send({a: 1});
});

module.exports = router;