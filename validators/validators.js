const isEmpty = require("is-empty");
const validator = require("validator");

const loginValidator = (data) => {
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  const errors = {};
  let emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide a valid email"
    : "";
  let passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";

  if (emailError) {
    errors.email = emailError;
  }

  if (passwordError) {
    errors.password = passwordError;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

const registerValidator = (data) => {
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  const errors = {};
  let emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide a valid email"
    : "";
  let passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";

  let confirmPasswordError = validator.isEmpty(data.confirmPassword)
    ? "You must confirm your password"
    : data.confirmPassword !== data.password
    ? "Passwords do not match"
    : "";

  let nameError = validator.isEmpty(data.name) ? "Name is required" : "";

  let usernameError = validator.isEmpty(data.username)
    ? "Username is required"
    : "";

  if (emailError) {
    errors.email = emailError;
  }

  if (passwordError) {
    errors.password = passwordError;
  }

  if (confirmPasswordError) {
    errors.confirmPassword = confirmPasswordError;
  }

  if (nameError) {
    errors.name = nameError;
  }

  if (usernameError) {
    errors.username = usernameError;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = { loginValidator, registerValidator };
