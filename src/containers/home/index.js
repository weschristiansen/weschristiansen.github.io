import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync,
} from '../../modules/counter';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import './home.css';

class Home extends Component {
    static defaultProps = {
        gravatar: 'https://www.gravatar.com/avatar/a844e923c24bd60aa0a2f0b3308ec720.jpg?s=500',
        instagram: { followers: 10, stories: 10 },
        twitter: { followers: 100, tweets: 30 },
    };

    static propTypes = {
        gravatar: PropTypes.string,
        instagram: PropTypes.object,
        twitter: PropTypes.object,
    };

    render() {
        const {
            gravatar,
            instagram,
            twitter,
        } = this.props;

        return (
            <div className="home">
                <div className="wrapper">
                    <img className="gravatar" src={gravatar} />
                </div>
                <div className="name">
                    <h1>wes christiansen</h1>
                    <span>staff engineer / team lead</span>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/weschristiansen" rel="noopener" ><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    {' '}
                    <a href="https://github.com/weschristiansen" rel="noopener" ><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    {' '}
                    <a href="https://www.facebook.com/wes.christiansen" rel="noopener" ><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    {' '}
                    <a href="https://twitter.com/weschristiansen" rel="noopener" ><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({counter}) => ({
    count: counter.count,
    isDecrementing: counter.isDecrementing,
    isIncrementing: counter.isIncrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us'),
    decrement,
    decrementAsync,
    increment,
    incrementAsync,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
