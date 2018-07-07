const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  date: {
    type: String,
    trim: true,
    required: "Date is required"
  },
  url: {
    type: String,
    trim: true,
    required: "URL is required"
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;