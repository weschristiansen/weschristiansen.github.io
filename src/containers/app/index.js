import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FontAwesome from './FontAwesome';
import { Helmet } from 'react-helmet';
import Home from '../home';

export default class App extends Component {
    render() {
        return (
            <div>
                <FontAwesome />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>wes christiansen</title>
                    <link rel="canonical" href="https://weschristiansen.com/" />
                </Helmet>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}
