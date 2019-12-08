import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contest";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList,} from '../sw-components';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new DummySwapiService(),
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

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            }
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        { planet }

                        <div className="row mb2 button-row">
                            <button
                                className="toggle-planet btn btn-warning btn-lg"
                                onClick={this.toggleRandomPlanet}>
                                Toggle Random Planet
                            </button>
                            <ErrorButton/>
                        </div>

                        <PersonDetails itemId={11} />

                        <PlanetDetails itemId={5} />

                        <StarshipDetails itemId={9} />

                        <PersonList/>

                        <StarshipList />

                        <PlanetList />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
