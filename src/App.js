import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'assets/styles/tailwind.css';
import 'assets/styles/app.css';
import HomePage from 'pages/HomePage';
import DetailPage from 'pages/DetailPage';

const App = () => {
    return (
        <div className="app w-100 h-screen overflow-hidden" style={{ backgroundColor: '#f7f8fe' }}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/detail/:username" component={DetailPage} />
            </Switch>
        </div>
    );
}

export default App;
