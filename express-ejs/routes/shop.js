const express = require('express');
const router = express.Router();

const fileDir = '/express-ejs/routes/shop.js/';
const admin = require('./admin');

router.get('/', (req, res, next) => {
  const fnName = `${fileDir}#router.get()-/`;
  console.log(fnName);
  res.render('shop', { pageTitle: 'My Products', prods: admin.products, path: '/' });
});

module.exports = router;
