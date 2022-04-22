// const req = require('express/lib/request');

const router = require('express').Router();
const { Deck } = require('../db/models')

router
  .get('/', async (req, res) => {
    const allTheme = await Deck.findAll({
      raw: true,
      attributes: ['theme'],
    });
    res.render('home', { allTheme });
  })

module.exports = router;
