import React, {Component} from 'react';

import Row from "../row";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {

    state = {
        selectedItem: Math.floor(Math.random()*4 + 1),
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem,
        });
    };

    render() {

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected}/>}
                right={<PersonDetails itemId={this.state.selectedItem} />} />
        );
    }
}
