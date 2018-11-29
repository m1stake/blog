import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Nav from './component/nav';
import Article from './component/article';
import ArticleList from './component/articleList';


const contentStyle = {
  boxShadow : "rgb(204, 204, 204) 0px 1px 2px",
  background: "rgb(255, 255, 255, .5)",
  width: 800,
  marginBottom: "2em"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Container style={contentStyle}>
          <ArticleList />
          {/* <Article /> */}
        </Container>
      </div>
    );
  }
}

export default App;
