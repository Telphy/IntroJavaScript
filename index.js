const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

 
app.get('/:nome', function (req, res) {
    res.send('Hello ' + req.params.nome)
  })
 
const port = 3001

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//npm install express path --save
//npm install express nodemon --save
//npm install express nodemon --save-dev
//npm start