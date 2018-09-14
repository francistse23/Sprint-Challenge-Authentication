import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        }
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    };
    submit = e => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/login', this.state)
            .then( res => { 
                const token = res.data.token;
                localStorage.setItem('jwt', token);
                window.location.href='http://localhost:3000/jokes';
            })
            .catch( err => {
                window.location.href='http://localhost:3000/signin';
                console.log(err.message);
            });
    }
    render() {
        return (
            <Form onSubmit={this.submit}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        style={{width: "300px", margin: '0 auto'}}
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        style={{width: "300px", margin: '0 auto'}}
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit'>Login</Button>
            </Form>
        )
    }
};

export default Signin;