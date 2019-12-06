import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        itemList: null,
    };

    componentDidMount() {

        // получаем функцию (одну из 3 для получения списков)
        // и затем используем ее для получения тех данных которые
        // нужны родительскому компоненту обертке (например people-page)
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                });
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;

            const label = this.props.children(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) return <Spinner/>;

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
