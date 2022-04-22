const router = require("express").Router();

const {User} = require('../db/models');


router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {

  const { login, password } = req.body;
  console.log(login, password);
  const thisUser = await User.findOne({ where: { login }, raw:true });
  if (!thisUser) {
    res.redirect('/registration')
    // res.render('login', {error: 'Неверное имя или пароль'})
  } else{

    res.redirect('/home')
  }
});

module.exports = router;
