import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import './font.css';
import articles from '../service/db.js'
import hljs from "highlight.js"


const containerStyle = {
    paddingTop: "1.5em",
    minHeight: "60em"
}

class Article extends Component {

    componentDidMount() {
        hljs.initHighlighting();
    }

    render () {
        let Content = articles[this.props.match.params.id].content;
        return (
            <Container style={containerStyle}>
                <Content ref="content" />
            </Container>
        );
    }
}

export default Article;