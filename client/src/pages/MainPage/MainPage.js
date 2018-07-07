import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import PagePanel from "../../components/PagePanel"

class MainPage extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
          console.log(res.data.response.docs);
          this.setState({ articles: res.data.response.docs })
        });
      this.setState({ topic: "", startYear: "", endYear: "" });
      console.log("form submitted");
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <PagePanel
              sectionTitle="Search"
            >
              <form>
                <Input
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="topic"
                  placeholder="Topic (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="startYear"
                  placeholder="Start Year (optional)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="endYear"
                  placeholder="End Year (optional)"
                />
                <FormBtn
                  disabled={!(this.state.topic)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </PagePanel>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <PagePanel
              sectionTitle="Results"
            >
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map((article) => (
                    <ListItem key={article.web_url}>
                      <strong>
                        <a href={article.web_url} target="_blank">
                          {article.headline.main}
                        </a>
                      </strong>
                      <p>
                        Published: {article.pub_date}
                      </p>
                      {/*<SaveBtn onClick={() => this.handleSaveBtn(article.headline.main, article.web_url, article.pub_date)} />*/}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <p>No Results to Display</p>
              )}
            </PagePanel>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <PagePanel
              sectionTitle="Saved Articles"
            >

            </PagePanel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;