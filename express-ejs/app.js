const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const fileDir = '/express-ejs/app.js/';
const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  const fnName = `${fileDir}#app.use()-404`;
  console.log(fnName);
  res.status(404).render('404.ejs', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
