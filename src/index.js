import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import 'highlight.js/styles/lightfair.css'
import Article from './component/article'
import ArticleList from './component/articleList'
import { HashRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <App>
            <Route exact path="/" component={ArticleList} />
            <Route path="/article/:id" component={Article} />
        </App>
    </HashRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
