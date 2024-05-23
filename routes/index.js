const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/form', (req, res) => {
  res.render('form');
});

router.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully!');
});

router.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.render('index', { itemId });
});

module.exports = router;
