import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Nav from './component/nav';
import Article from './component/article';
import ArticleList from './component/articleList';


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

    // This binding is necessary to make `this` work in the callback
  }

  loadArticle(event, a) {
    this.setState({ index: false, articleid:  a.articleid})
  }

  render() {
    return (
      <div className="App" ref={ this.handleContextRef }>
        <Nav ref="nav"/>
        <Container style={ contentStyle }>
          { 
            this.state.index ? 
              <ArticleList toArticle={ this.loadArticle.bind(this) } /> 
              : <Article articleid={ this.state.articleid } /> 
          }
        </Container>
      </div>
    );
  }
}

export default App;
