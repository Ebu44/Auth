const brcypt = require("bcryptjs");
const validateUserInput = (email, password) => {
  return email && password;
};
const comparePassword = (password, hasedPassword) => {
  return brcypt.compareSync(password, hasedPassword);
};
module.exports = { validateUserInput, comparePassword };
