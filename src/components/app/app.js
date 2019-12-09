import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contest";

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList,} from '../sw-components';
import Row from "../row";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
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

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        { planet }

                        <Row
                            left={<PersonList />}
                            right={<PersonDetails itemId={11} />} />

                        <Row
                            left={<PlanetList />}
                            right={<PlanetDetails itemId={5} />} />

                        <Row
                            left={<StarshipList />}
                            right={<StarshipDetails itemId={9} />} />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
