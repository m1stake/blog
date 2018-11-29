import React, {Component} from "react";
import {Container, Header} from "semantic-ui-react";
import './font.css';
import Paragraph from './paragraph';


const containerStyle = {
    paddingTop: "1.5em",
    minHeight: "60em"
}

const headerStyle = {
    paddingBottom: "1em",
    fontFamily: "STFangSong, Helvetica, Arial, Vernada, Tahoma, STXihei, 'Microsoft YaHei', 'Songti SC', SimSun, Heiti, sans-serif"
}

class Article extends Component {
    render () {
        return (
            <Container style={containerStyle}>
                <Header size="large" style={headerStyle}>
                    Java原生数据类型的拆装箱
                </Header>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
                <Paragraph/>
            </Container>
        );
    }
}

export default Article;