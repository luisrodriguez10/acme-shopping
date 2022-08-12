import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from './store';

class SignIn extends Component{

    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(ev){
        this.setState({[ev.target.name]: ev.target.value})
    }

    onSubmit(ev){
        ev.preventDefault();
        this.props.login(this.state);
    }

    render(){
        const { username, password } = this.state;
        const { onChange, onSubmit }  = this;
        return(
            <form onSubmit={onSubmit}>
                <input name='username' value={ username } onChange={ onChange } />
                <input type='password' name='password' value={ password } onChange={ onChange }/>
                <button>Login</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) =>{
            dispatch(login(credentials))
        }
    }
}

export default connect(null, mapDispatchToProps)(SignIn);