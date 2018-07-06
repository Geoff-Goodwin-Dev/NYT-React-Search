import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
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
      // API.saveArticle({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      //   .then(res => this.loadArticles())
      //   .catch(err => console.log(err));
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
              <p>Testing</p>
            </PagePanel>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <PagePanel
              sectionTitle="Saved Articles"
            >
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem key={article._id}>
                      {/*<Link to={"/books/" + article._id}>*/}
                        {/*<strong>*/}
                          {/*{article.title} by {article.author}*/}
                        {/*</strong>*/}
                      {/*</Link>*/}
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </PagePanel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;