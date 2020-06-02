import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import './App.css';

import Landingpage from '../landingpage/Landingpage';
import Header from '../header/Header';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
				<Header />

                <Switch>
                    <Route path='/' component={Landingpage} />
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;
