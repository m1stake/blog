import React, {Component} from "react";
import {Header} from "semantic-ui-react";


const headerStyle = {
    paddingBottom: "1em",
    fontFamily: "STFangSong, Helvetica, Arial, Vernada, Tahoma, STXihei, 'Microsoft YaHei', 'Songti SC', SimSun, Heiti, sans-serif"
}

class Title extends Component {
    render() {
        return (
            <Header size="large" style={headerStyle}>
                {this.props.title}
            </Header>
        )
    }
}

export default Title