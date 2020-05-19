const Joke = require("../models/jokes.model");

module.exports = {
  // long-form key: value format
  create: function(req, res) {
    Joke.create(req.body)
      .then((joke) => {
        res.json(joke)
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getAll(req, res) {
    Joke.find()
      .then((jokes) => {
        res.json(jokes);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getOne(req, res) {
    Joke.findById(req.params.id)
      .then((joke) => {
        res.json(joke);
      })
      .catch((err) => {
        res.json(err);
      })
  },
  delete(req, res) {
    Joke.findByIdAndDelete(req.params.id)
      .then ((joke) => {
        res.json(joke);
      })
      .catch((err) => {
        res.json(err);
      })
  },
  update(req, res) {
    Joke.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedJoke) => {
        res.json(updatedJoke);
      })
      .catch((err) => {
        res.json(err);
      })
  },



}
