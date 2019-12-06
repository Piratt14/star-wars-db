import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary";
import Row from "../row";

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: Math.floor(Math.random()*9 + 1),
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) =>
                `${i.name} (${i.birthYear})`}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson}/>
            </ErrorBoundary>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        );
    }
}
