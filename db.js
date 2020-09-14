const MongoClient = require('mongodb').MongoClient

let state = {
  db: null,
}
exports.get = get;
exports.connect = function(url, key, done) {
  // done = done || function() {}
  if (state.db) {
    return done()
  }
  MongoClient.connect(url, key, (err, db) => {
    if (err) {
      return done(err)
    }
    state.db = db.db('myapi');
    done()
  })
}
function get() {
  return state.db;
}