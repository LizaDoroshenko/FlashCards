const router = require("express").Router();
const {User} = require('../db/models');

router.get("/", (req, res) => {
  res.render("registration");
});

router.post("/", async (req, res) => {

  const { login, password } = req.body;
  const thisUser = await User.findOne({ where: { login } });
  if (!thisUser) {
    const createUser = await User.create({
      login,
      password,
    });
  }
  res.redirect('/login')
});


module.exports = router;
