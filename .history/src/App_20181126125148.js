import React, { Component } from 'react';
import './App.css';
import { Menu, MenuItem, Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu className="fixed">
          <MenuItem link>jksladfja</MenuItem>
          <MenuItem link>alsjdfka</MenuItem>
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
