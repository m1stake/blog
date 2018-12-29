import React, { Component } from 'react';
import { Menu, MenuItem, MenuHeader } from 'semantic-ui-react';
import './font.css';
import './nav.css';
import { Link } from 'react-router-dom'

const menuHeaderStyle = {
    fontSize: "16px", 
    lineHeight: "2.1em",
    paddingLeft: "1em"
};

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    render () {
        return (<Menu className="nav-font nav" size="mini" 
            style={{display: this.state.show ? "flex" : "none"}}>
            <MenuHeader style={menuHeaderStyle}>沉默的羔羊</MenuHeader>
            <MenuItem position="right" link><Link to="/"> 首页 </Link></MenuItem>
            <MenuItem link>ZZZ</MenuItem>
        </Menu>);
    }
}

export default Nav
