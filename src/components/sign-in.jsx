import React, { Component } from "react";
import PropTypes from 'prop-types';

import './sign-in.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            loginError: null
        };
    }

    handleChange(event) {
        const { type, value } = event.target;
        this.setState({ [type]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;
        const response = await this.props.authenticate(email, password);
        const type = response.type;
        if (type === 'AUTHENTICATION_ERROR') {
            return this.setState({ loginError: 'Incorrect details' });
        } else {
            this.props.redirect('/apps');
        }

    }

    render() {
        const errMsg = this.state.loginError ? <span className="error">{this.state.loginError}</span> : null;
        return (
            <div className="signin-container">
                <form id="sign-in" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} placeholder="Email address" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                    <input onChange={this.handleChange} placeholder="Password" type="password" />
                    <input type="submit" />
                    {errMsg}
                </form>
            </div>
        );
    }
}

SignIn.propTypes = {
    authenticate: PropTypes.func.isRequired,
    redirect: PropTypes.func.isRequired
}

export default SignIn;