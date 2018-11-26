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
        <Container style={{marginTop: "6em"}}>
          <Header size="large">
            Java Primitive Type 的拆装箱
          </Header>
        </Container>
      </div>
    );
  }
}

export default App;
