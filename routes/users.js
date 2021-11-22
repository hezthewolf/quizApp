const express = require("express");
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/checkAuth");
const {
  loginValidator,
  registerValidator,
} = require("../validators/validators");

const router = express.Router();

router.post("/register", (req, res) => {
  const { errors, isValid } = registerValidator[req.body];
  if (!isValid) {
    res.json({ success: false, errors });
  } else {
    const { name, username, email, password } = req.body;
    const registerUser = new Users({
      name,
      username,
      email,
      password,
    });
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(registerUser.password, salt, (hashErr, hash) => {
              if (err || hashErr) {
                  res.json({
                      message: "Error occured while hashing",
                      success: false
                  })
                  return;
              }
              registerUser.password = hash;
              registerUser.save().then(() => {
                  res.json({
                      message: "User created successfully",
                      success: true
                  })
              }).catch(err => {
                  res.json({
                      message: err.message,
                      success: false
                  })
              })
          })
      })
  }
});

module.exports = router;
