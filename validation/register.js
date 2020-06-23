const Validator = require("validator");
const isEmpty = require("./is-empty");
const { default: validator } = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nmae nust be btw 2 and 30 caracter";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password field must be  6 chaacters ";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "confirm password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
