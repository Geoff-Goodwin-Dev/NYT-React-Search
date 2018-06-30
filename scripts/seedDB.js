const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "Geoff Goodwin - Developer Portfolio",
    date: new Date(Date.now()),
    url: "https://github.com/Geoff-Goodwin-Dev/Developer-Portfolio"
  },
  {
    title: "The Table - The Code Dictator",
    date: new Date(Date.now()),
    url: "https://github.com/Geoff-Goodwin-Dev/TheTable-TheCodeDictator"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});