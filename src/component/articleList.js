import React, {Component} from "react";
import {Container, List} from "semantic-ui-react";
import './font.css';
import './articleList.css';


const itemContentStyle = {
    lineHeight: "1.6em",
    paddingLeft: "1em",
    fontSize: 21
}


class ArticleList extends Component {

    render () {
        let items = [];
        for (var i = 0; i < 15; i++) {
            items.push(
                <List.Item>
                    <List.Content style={itemContentStyle}>
                        <a>Java原生数据类型的拆装箱</a>
                    </List.Content>
                </List.Item>
            );
        }

        return (
            <Container style={{padding: "0.5em 0", marginTop: "3em"}}>
                <List divided selection relaxed className="article-list">
                    {items}
                </List>
            </Container>
        );
    }
}

export default ArticleList