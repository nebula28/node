const express = require('express');
const router = express.Router();

const fileDir = '/express-ejs/routes/admin.js/';
const products = [];

router.get('/add-product', (req, res, next) => {
  const fnName = `${fileDir}#router.get()-/admin/add-product`;
  console.log(fnName);
  res.render('add-product.ejs', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

router.post('/add-product', (req, res, next) => {
  const fnName = `${fileDir}#router.post()-/admin/add-product`;
  console.log(fnName);
  products.push({ title: req.body.title });
  console.log('Redirecting to /');
  res.redirect('/');
});

module.exports = {
  routes: router,
  products,
};
