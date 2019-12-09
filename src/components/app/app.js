import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";

import './app.css';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contest";
import {LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from "../pages";
import {StarshipDetails} from "../sw-components";

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>

                            <RandomPlanet />

                            {/*  Оборачиваем все пути в switch из react-router */}
                            <Switch>
                                <Route path="/"
                                       render={() => <h2>Welcome to StarDB</h2>}
                                       exact />
                                {/* exact служит для указания пути в точности, без отображения других частей приложения */}
                                <Route path="/people/:id?" component={PeoplePage} />
                                {/*  опциональный параметр - :id?   */}
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships" exact component={StarshipsPage} />
                                <Route path="/starships/:id"
                                        render={({match, location, history}) => {
                                            const { id } = match.params;
                                            return <StarshipDetails itemId={id}/>;
                                        }}/>
                                <Route path="/login"
                                        render={() =>
                                            <LoginPage
                                                isLoggedIn={isLoggedIn}
                                                onLogin={this.onLogin}/>
                                        }/>
                                <Route path="/secret"
                                       render={() => <SecretPage isLoggedIn={isLoggedIn}/> }/>
                                {/*  Если ни один route в switch не сработал, то сработает этот последний редирект  */}
                                <Redirect to="/"/>
                                {/*  ещё одна стратегия обработки несуществующих страниц это показ   */}
                                {/*  страницы с ошибкой, например так примитивно как ниже в коде  */}
                                {/*  если в роут не передать path, то он будет срабатывать всегда*/}
                                {/*  а так как он стоит последний в switch то и срабатывать будет*/}
                                {/*  когда все другие отказались работать  */}
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
