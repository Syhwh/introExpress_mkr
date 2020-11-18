const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();


// settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

// middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(require('./routes/routes'))

app.listen(3000, () => console.log('Server runing in port 3000'));