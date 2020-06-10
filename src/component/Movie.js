import React from 'react';
import prototype from 'prop-types';
import {Link} from 'react-router-dom';
""
function Movie({title, year, summary, poster}){
    return(
        <Link to={{
            pathname: "/about",
            state:{
                summary
            }
        }}>
            <div>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <img src={poster}></img>
            </div>
        </Link>
    )
}

Movie.prototype = {
    id: prototype.number.isRequired,
    title: prototype.string.isRequired,
    year: prototype.number.isRequired,
    summary: prototype.string.isRequired,
    poster: prototype.string.isRequired
}

export default Movie;