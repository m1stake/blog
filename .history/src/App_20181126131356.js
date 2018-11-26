import React, { Component } from 'react';
import './App.css';
import { Menu, MenuItem, Container, Header, MenuHeader } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu className="fixed" style={{
            fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Helvetica, STKaiti, SimSun, serif"}}
            size="large"
            >
          <MenuHeader style={{
            fontSize: "20px", lineHeight: "2em", paddingLeft: '0.5em'
          }}>沉默的羔羊</MenuHeader>
          <MenuItem right>XXXX</MenuItem>
          <MenuItem right>ZZZ</MenuItem>
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
