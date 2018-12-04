import React, {Component} from "react"
import {Container, List} from "semantic-ui-react"
import './font.css'
import './articleList.css'
import articles  from '../service/db'


const itemContentStyle = {
    lineHeight: "1.6em",
    paddingLeft: "1em",
}

class ArticleList extends Component {

    render () {

        return (
            <Container style={{padding: "0.5em 0", marginTop: "3em"}}>
                <List divided selection relaxed className="article-list">
                    {
                        Object.entries(articles).map( ([id, article]) => (
                            <List.Item key={id} articleid={id} onClick={this.props.toArticle}>
                                <List.Content className="item" style={itemContentStyle}>
                                    <a href={ "#/article/" + id }>{ article.title }</a>
                                </List.Content>
                            </List.Item>
                        ))
                    }
                </List>
            </Container>
        );
    }
}

export default ArticleList