import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync,
} from '../../modules/counter';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import './home.css';

class Home extends Component {
    static defaultProps = {
        gravatar: 'https://www.gravatar.com/avatar/a844e923c24bd60aa0a2f0b3308ec720.jpg?s=300',
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
                <div>
                    <img className="gravatar" src={gravatar} />
                    <h1>wes christiansens</h1>
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
