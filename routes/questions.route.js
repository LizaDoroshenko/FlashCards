const router = require('express').Router();
const { Card } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    // const data = req.params

    // const question = await Card.findAll({ where: { deck_id: data.card }, raw: true, offset: 1, limit: 1 })

    // console.log('question =>', question)

    res.render('questions');
  });

module.exports = router;