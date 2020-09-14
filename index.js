const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
let ObjectID = require('mongodb').ObjectID
const port = 2000

let db = require('./db')
const artistsController = require('./controllers/artists')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', artistsController.all)

app.get('/artists/:id', artistsController.findById)

app.post('/artists', artistsController.create)

app.put('/artists/:id', artistsController.update)

app.delete('/artists/:id', (req, res) => {
  db.get()
    .collection('artists')
    .deleteOne({ _id: ObjectID(req.params.id) }, (err, result) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      return res.sendStatus(200)
    })
  // res.send(artist)
})

db.connect(
  'mongodb://localhost:27017/myapi',
  { useUnifiedTopology: true },
  (err) => {
    if (err) {
      return console.log(err)
    }

    app.listen(port, () => {
      console.log('Api start')
    })
  }
)
