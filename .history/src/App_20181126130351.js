import React, { Component } from 'react';
import './App.css';
import { Menu, MenuItem, Container, Header, MenuHeader } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu className="fixed">
          <MenuHeader style={{fontSize: "24px"}}>axlxl</MenuHeader>
        </Menu>
        <Container style={{marginTop: "6em"}} text>
          <Header size="large">
            Java原生数据类型的拆装箱
          </Header>
        </Container>
      </div>
    );
  }
}

export default App;
