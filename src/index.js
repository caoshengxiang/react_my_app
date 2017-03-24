import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1Dome from './pages/p1'
import './index.css';

import Page2 from './pages/p2'

ReactDOM.render(
    <div>
        <App />
        <Page1Dome title={100}>
            <span>hello</span>
            <span>world</span>
            <div>
                <h1>hi</h1>
                <p>w o r l d</p>
            </div>
        </Page1Dome>
        <Page2 name="allen"/>
    </div>,
    document.getElementById('root')
);
