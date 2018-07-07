import axios from "axios";

const apiKey = "7f9c42b7cddf4af3bb3ccda0b4efebf0";

export default {
  // Retrieves the saved articles from the database
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  runQuery: (query, startYear, endYear) => {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          "api-key": apiKey,
          "q": query.trim(),
          "begin_date": (startYear.trim().length < 4) ? "19000101" : `${startYear.trim()}0101`,
          "end_date": (endYear.trim().length < 4) ? "21001231" : `${endYear.trim()}1231`,
          "fl": "web_url,pub_date,headline,snippet",
        },
      }
    );
  }

};