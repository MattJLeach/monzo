import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from './ui';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.mapPropsToState = this._mapPropsToState.bind(this);
        this.handleNameChange = this._handleNameChange.bind(this);
        this.handleLogoChange = this._handleLogoChange.bind(this);
        this.handleSaveClick = this._handleSaveClick.bind(this);

        this.state = {
            detailsSet: false,
            name: null,
            logo: null,
            id: null
        }
    }

    componentDidMount() {
        this.props.isValidToken();

        if (!this.props.items || !this.props.items.length) {
            this.props.fetchApps();
        }
        this.mapPropsToState();
    }

    componentDidUpdate() {
        if (this.state.detailsSet) return;
        this.mapPropsToState();
    }

    _mapPropsToState() {
        const { items, appId } = this.props;
        if (!items || !items.length) return;
        const details = items.filter(i => i.id === appId);
        this.setState({
            name: details[0].name,
            logo: details[0].logo,
            id: appId,
            detailsSet: true
        });
    }

    _handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    _handleLogoChange(e) {
        this.setState({ logo: e.target.value })
    }

    _handleSaveClick() {
        const { id, name, logo } = this.state;
        const details = {
            id,
            name,
            logo
        }
        this.props.updateApp(details)
            .then(() => this.props.fetchApps())
            .then(() => this.props.redirect('/apps'));
    }

    render() {
        if (this.props.authError) {
            return (<Redirect to='/' />);
        }
        const { name, logo } = this.state;
        if (!this.state.name) {
            return (<div>LOADING APPS...</div>);
        }
        const logoOptions = ['Abstract', 'City', 'People', 'Transport', 'Animals', 'Food', 'Nature', 'Business', 'Nightlife', 'Sports', 'Cats', 'Fashion', 'Technics'];
        return (
            <div className="edit-app">
                <h1>Edit App</h1>
                <input type="text" value={name} onChange={this.handleNameChange} />
                <select value={logo} onChange={this.handleLogoChange}>
                    {logoOptions.map(o => (
                        <option key={o} value={`http://lorempixel.com/400/400/${o.toLowerCase()}`}>{o}</option>
                    ))}
                </select>
                <Image src={logo} alt={name} size="400" />
                <button onClick={this.handleSaveClick}>Save</button>
            </div>
        );
    }

}

App.propTypes = {
    authError: PropTypes.bool,
    error: PropTypes.bool,
    items: PropTypes.array.isRequired,
    appId: PropTypes.string.isRequired,
    fetchApps: PropTypes.func.isRequired,
    updateApp: PropTypes.func.isRequired,
    redirect: PropTypes.func.isRequired,
    isValidToken: PropTypes.func.isRequired
}

export default App;