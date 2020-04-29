import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'assets/styles/tailwind.css';
import 'assets/styles/app.css';
import HomePage from 'pages/HomePage';
import DetailPage from 'pages/DetailPage';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/detail/:username" component={DetailPage} />
            </Switch>
        </div>
    );
}

export default App;
