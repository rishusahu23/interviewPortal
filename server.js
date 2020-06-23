const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const port = process.env.PORT || 5000;

const app = express();

//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const build_path = path.join(__dirname, "client/build");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(build_path));
  app.get("*", (req, res) => {
    res.sendFile(path.join(build_path, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
