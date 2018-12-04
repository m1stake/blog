import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import './font.css';
import articles from '../service/db.js'


const containerStyle = {
    paddingTop: "1.5em",
    minHeight: "60em"
}

class Article extends Component {


    render () {
        let Content = articles[this.props.articleid].content;
        return (
            <Container style={containerStyle}>
                <Content />
            </Container>
        );
    }
}

export default Article;