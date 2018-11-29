import React, { Component } from 'react';
import { Menu, MenuItem, MenuHeader } from 'semantic-ui-react';
import './font.css';
import './nav.css';

const menuStyle = {
    width: "8em",
    marginLeft: "1em",
    bottom: "5%",
    top: "auto"
};

const menuHeaderStyle = {
    fontSize: "20px", lineHeight: "2em"
};


class Nav extends Component {

    render () {
        return (<Menu className="fixed nav-font nav" size="small" vertical style={menuStyle} >
            <MenuHeader style={menuHeaderStyle}>--</MenuHeader>
            <MenuItem position="right" link>XXXX</MenuItem>
            <MenuItem link>ZZZ</MenuItem>
        </Menu>);
    }
}

export default Nav
