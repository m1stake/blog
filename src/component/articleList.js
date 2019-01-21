import React, {Component} from "react"
import {Container, List} from "semantic-ui-react"
import './font.css'
import './articleList.css'
import articles  from '../service/db'
import { Link } from 'react-router-dom'


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
                        articles.map( (article, index) => (
                            <List.Item key={index} articleid={index} onClick={e => {
                                let t = e.target;
                                while (t && t.tagName.toLowerCase() !== 'a') {
                                    t = t.firstElementChild;
                                }
                                if (t) {
                                    t.click();
                                }
                            }}>
                                <List.Content className="item" style={itemContentStyle}>
                                    <Link to={'/article/' + index}>{ article.title }</Link>
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