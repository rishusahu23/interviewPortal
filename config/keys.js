if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else module.exports = require("./keys_dev");

// module.exports = {
//   mongoURI:
//     "mongodb+srv://rishusahu23:rishu23sahu@cluster0-l8bg7.mongodb.net/test",
//   secretOrKey: "secret",
// };
