const express = require("express");
const router = express.Router();

//@route GET api/profile/test
//@desc Tests profile route
//@access Pulic
router.get("/test", (req, res) => {
  res.json({ msg: "profile works" });
});

module.exports = router;
