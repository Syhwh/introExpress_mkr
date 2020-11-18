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

const colors = ['black', 'red', 'blue', 'green', 'pink']

// routes
app.get('/', (req, res) => {
  res.render('home', {
    arreglo: colors,
    style: 'home'
  })
})

app.get('/about', (req, res) => {
  res.render('about', { style: 'about' })
})

app.get('/user', (req, res) => {
  res.render('user')
})

app.post('/user', (req, res) => {
  const nombre = req.body.name
  console.log(typeof (nombre))
  console.log()
  res.render('greetings', {
    name: nombre.toUpperCase(), lastname: '<h1>james</h1>'
  })
})


// helpers if each lookup with 












app.listen(3000, () => console.log('Server runing in port 3000'));