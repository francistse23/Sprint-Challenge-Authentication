import React from 'react';
import axios from 'axios';

class Jokes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jokes : [],
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('jwt');
        const reqOptions = {
            headers: {
                Authorization: token
            }
        }
        axios.get('http://localhost:3300/api/jokes', reqOptions)
        .then( res => {
            this.setState({ jokes: res.data })
        })
        .catch( err => console.log(err.message));
    }
    render(){
        return(
            <div>
                {this.state.jokes.map( joke => {
                    return(
                        <div key={joke.id}>
                            <ul>type: {joke.type}</ul>
                            <ul>setup: {joke.setup}</ul>
                            <ul>punchline: {joke.punchline}</ul>
                        </div>
                )})}
            </div>
        )
    }
};

export default Jokes;