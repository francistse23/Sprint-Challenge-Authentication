import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
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
        axios.post('http://localhost:3300/api/register', this.state)
            .then( res => { 
                const token = res.data.token;
                localStorage.setItem('jwt', token);
                window.location.href='http://localhost:3000/jokes';
            })
            .catch( err => {
                console.log(err.message);
                window.location.href='http://localhost:3000/signup';
            });
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <label>Username</label>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <button type='submit'>Register</button>
            </form>
        )
    }
};

export default Signup;