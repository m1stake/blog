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

  render() {
    return (
      <div className="App" ref={ this.handleContextRef }>
        <Nav/>
        <Container style={ contentStyle }>
            { this.props.children }
        </Container>
      </div>
    );
  }
}

export default App;
