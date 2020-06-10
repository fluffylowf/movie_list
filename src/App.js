import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './component/Movie';

import Home from './route/Home';
import Second from './route/Second';
import Navigation from './route/Navigation';
import About from './route/About';

import {HashRouter, Route} from 'react-router-dom';

function App(){
    return(
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/second" exact={true} component={Second}></Route>
            <Route path="/about" exact={true} component={About}></Route>
        </HashRouter>
    )
}

export default App;