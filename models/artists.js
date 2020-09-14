const db = require('../db')
const ObjectID = require('mongodb').ObjectID

exports.all = (cd) => {
  db.get()
    .collection('artists')
    .find()
    .toArray((err, docs) => {
      cd(err, docs)
    })
}
exports.findById = (id, cd) => {
  db.get()
    .collection('artists')
    .findOne({ _id: ObjectID(id) }, (err, doc) => {
      cd(err, doc)
    })
}
exports.create = (artist, cd) => {
  db.get()
    .collection('artists')
    .insertOne(artist, (err, result) => {
      cd(err, result)
    })
}
exports.update = (id, name, cd) => {
  db.get()
    .collection('artists')
    .update({ _id: ObjectID(id) },  name, (err, result) => {
      cd(err, result)
    })
}
