import React from 'react';

class About extends React.Component{
    
    componentDidMount(){
        const {location, history} = this.props;
                
        if(location.state === undefined){
            history.push('/')
        }
    }

    render(){
        const {location} = this.props;
        if (location.state)
            return <p>{location.state.summary}</p>;
        else return null;
    }
}

export default About;