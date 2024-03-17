const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: String,
  plot: String,
  fullplot: String,
});

const Movie = mongoose.model("movies", moviesSchema);

module.exports = Movie;
