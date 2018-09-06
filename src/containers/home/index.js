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
import { push } from 'connected-react-router';
import WindowSizeListener from 'react-window-size-listener';
import './home.css';

class Home extends Component {
    state = {
        hidden: false,
        width: 500,
    };

    onResize = windowSize => {
        if (this.state.windowWidth !== windowSize.windowWidth) {
            this.setState({
                width: windowSize.windowWidth,
            });
        }
    };

    onClick = () => this.setState({ hidden: !this.state.hidden });

    render() {
        const { hidden, width } = this.state;
        const gravatar = `https://www.gravatar.com/avatar/a844e923c24bd60aa0a2f0b3308ec720.jpg?s=${width > 460 ? 400 : 300 }`;
        const wrapperClass = hidden ? 'wrapper hidden' : 'wrapper';

        return (
            <div className="home">
                <WindowSizeListener onResize={this.onResize} />
                <div className={wrapperClass} onClick={this.onClick}>
                    <div className="description">I'm a former IT manager who is very familiar with the frustration users can experience with poorly designed software. I'm passionate about giving people a great experience with technology. I strive to build things that are intuitive, because if they aren't, they aren't worth using.</div>
                    <img className="gravatar" src={gravatar} />
                </div>
                <div className="name">
                    <h1>wes christiansen</h1>
                    <span>staff engineer / team lead</span>
                </div>
                <div className="links">
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
