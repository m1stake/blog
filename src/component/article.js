import React, {Component} from "react";
import {Container, Header} from "semantic-ui-react";
import './font.css';


class Article extends Component {
    render () {
        return (
            <Container>
                <Header size="large content-font">
                    Java原生数据类型的拆装箱
                </Header>
            </Container>
        );
    }
}

export default Article;