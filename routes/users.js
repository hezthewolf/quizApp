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


//                                                                       LOGIN

router.post("/login", (req, res) => {
  const { errors, isValid } = loginValidator(req.body);
  if (!isValid) {
    res.json({ success: false, errors });
  } else {
    Users.findOne({ username: req.body.username }).then(user => {
      if (!user) {
        res.json({ message: "Username does not exist", success: false });
      } else {
        bcrypt.compare(req.body.password, user.password).then(success => {
          if (!success) {
            res.json({ message: "Invalid password", success: false });
          } else {
            const payload = {
              id: user._id,
              name: user.name,
            };
            jwt.sign(
              payload,
              process.env.APP_SECRET,
              { expiresIn: 2155926 },
              (err, token) => {
                res.json({
                  user,
                  token: "Bearer token: " + token,
                  success: true,
                });
              }
            );
          }
        });
      }
    });
  }
});

//                                                       REGISTER

router.post("/register", (req, res) => {
  const { errors, isValid } = registerValidator(req.body);
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
            success: false,
          });
          return;
        }
        registerUser.password = hash;
        registerUser
          .save()
          .then(() => {
            res.json({
              message: "User created successfully",
              success: true,
            });
          })
          .catch((err) => {
            res.json({
              message: err.message,
              success: false,
            });
          });
      });
    });
  }
});



//                                                        GET USER
router.get('/:id', checkAuth, (req, res) => {
  Users.findOne({ _id: req.params.id }).then(user => {
    res.json({user, success:true})
  }).catch(err => {
    res.json({success: false, message: err.message})
  })
})


//                                                        GET ALL USERS
router.get('/users', (req, res) => {
  res.json({Users})
})

module.exports = router;
