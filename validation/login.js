const Validator = require("validator");
const isEmpty = require("./is-empty");
const { default: validator } = require("validator");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

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

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
