let Artists = require('../models/artists')

exports.all = (req, res) => {
  Artists.all((err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
}

exports.findById = (req, res) => {
  Artists.findById(req.params.id, (err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
}
exports.create = (req, res) => {
  let artist = {
    name: req.body.name,
  }
  Artists.create(artist, (err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
} 
exports.update = (req, res) => {
  Artists.update(req.params.id, { name: req.body.name }, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
}
