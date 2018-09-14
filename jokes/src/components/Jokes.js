import React from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardColumns, Col } from 'reactstrap';

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
                        <Col sm='4'>
                        <CardColumns sm='4'>
                            <Card key={joke.id} body color='danger'>
                                <CardBody>
                                    <CardTitle>{joke.type}</CardTitle>
                                    <CardSubtitle>{joke.setup}</CardSubtitle>
                                    <CardText>{joke.punchline}</CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                        </Col>
                )})}
            </div>
        )
    }
};

export default Jokes;