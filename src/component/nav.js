import React, { Component } from 'react';
import { Menu, MenuItem, MenuHeader } from 'semantic-ui-react';
import './font.css';


class Nav extends Component {

    render () {
        return (<Menu className="fixed nav-font" size="large" >
            <MenuHeader style={{
                fontSize: "20px", lineHeight: "2em", paddingLeft: '0.5em'
                }}>--</MenuHeader>
            <MenuItem position="right" link>XXXX</MenuItem>
            <MenuItem link>ZZZ</MenuItem>
        </Menu>);
    }
}

export default Nav
