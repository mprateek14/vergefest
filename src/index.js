import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router , Link , Route , Switch} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import coming from './components/coming';
import Footer from './components/Footer';

const app= (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/comingsoon" component= {coming}/>
        
        <Route path="/" component= {App}/>
        <Route path="/about" component= {Footer}/>
        
        </Switch>
    </Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

