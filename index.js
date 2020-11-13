const express = require('express')
const cursos = require('./cursos')
const path = require('path')
const app = express()


// middleware



const middleware = (req, res, next) => {
  console.log(req.url)

  const { name } = req.query
  console.log(name)
  name !== 'luis' ? res.status(401).send('require auth') : next()
}

app.use(middleware)


// vistas -> PUG -> Handlebars
// crear una pag 
// 

app.get('/cursos', (req, res) => {
  res.send(cursos)
})

app.get('/cursos/:id', (req, res) => {
  const { id } = req.params
  res.send(cursos.filter((curso) => curso.id === parseInt(id)))
})

app.delete('/cursos', (req, res) => {
  res.send('delete correct')
})

/// serve static files

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './public') })
})


app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/about.html'))
})

app.post('/', (err, req, res) => {
  if (err) return res.status(404).send('not found')
  console.log(req.body)
  res.status(200).send('body correcto')
})


app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Ups something went wrong!')
})


app.listen(3000, () => console.log('server in port 3000'))