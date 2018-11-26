import React, { Component } from 'react';
import './App.css';
import { Menu, MenuItem, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu className="fixed">
          <MenuItem link>jksladfja</MenuItem>
          <MenuItem link>alsjdfka</MenuItem>
        </Menu>
        <Container style={{marginTop: "6em"}}>
          lllll
        </Container>
      </div>
    );
  }
}

export default App;
