import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Nav from './component/nav';
import Article from './component/article';
import ArticleList from './component/articleList';
import hljs from "highlight.js"


const contentStyle = {
  boxShadow : "rgb(204, 204, 204) 0px 1px 2px",
  background: "rgb(255, 255, 255, .5)",
  width: 900,
  marginBottom: "2em",
  marginTop: "1em"
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: true
    }
  }

  componentDidUpdate() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }

  loadArticle(event, a) {
    this.setState({ index: false, articleid:  a.articleid});
  }

  loadIndex() {
    this.setState({ index: true, articleid:  null})
  }

  render() {
    let articleList = <ArticleList toArticle={ this.loadArticle.bind(this) } />;
    let article = <Article articleid={ this.state.articleid } />;
    return (
      <div className="App" ref={ this.handleContextRef }>
        <Nav ref="nav" toIndex={ this.loadIndex.bind(this) } />
        <Container style={ contentStyle }>
          { this.state.index ? articleList : article }
        </Container>
      </div>
    );
  }
}

export default App;
