import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import './index.css';

import App from './pages/App';
import Home from './pages/home/home_main'
import About from './pages/about/about_main'
import Topics from './pages/topics/topics_main'

// import BasicExample from './routes/example_routes'

ReactDOM.render((
        <Router history={ hashHistory }>

            <Route path="/" component={App}>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="topics" component={Topics}/>
            </Route>

        </Router>
    ), document.getElementById('root')
);
