import React from 'react';
import proptype from 'prop-types';
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

Movie.proptype = {
    id: proptype.number.isRequired,
    title: proptype.string.isRequired,
    year: proptype.number.isRequired,
    summary: proptype.string.isRequired,
    poster: proptype.string.isRequired
}

export default Movie;