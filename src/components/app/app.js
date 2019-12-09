import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contest";
import {PeoplePage, PlanetsPage, StarshipsPage} from "../pages";

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>

                            <RandomPlanet />

                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
