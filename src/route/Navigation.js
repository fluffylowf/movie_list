import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <div>
        <Link to="/">Home</Link> 
        <Link to="/second">Second</Link> 
        </div>
    )
}

export default Navigation;