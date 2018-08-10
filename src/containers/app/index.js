import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Home from '../home';

export default class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>wes christiansen</title>
                    <link rel="canonical" href="https://weschristiansen.com/" />
                </Helmet>
                <main>
                    <Switch>
                        <Route exact path="/profile" component={Home} />
                        <Redirect to="/profile" />
                    </Switch>
                </main>
            </div>
        );
    }
}
