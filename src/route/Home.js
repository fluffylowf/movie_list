import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Movie from '../component/Movie';

class Home extends React.Component{
    state = {
        isLoading:true,
        movies: []
    }

    getMovies = async() => {
        const {
            data:{
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        this.setState({movies, isLoading:false})
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, movies} = this.state;
        return(
            <div>
                {isLoading? "Loading...": (
                    movies.map(movie => 
                    <Movie 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    poster={movie.medium_cover_image}
                    summary={movie.summary}
                    />)
                )}
            </div>
        )
    }
}

export default Home;