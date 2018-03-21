import React, { Component } from 'react';
import Card from './Card' //import card
import './List.css'

export default class List extends Component {

    renderCards = () => {
        return (
            this.props.cards.map((card)=> <Card cardName={card.name}/>)
        );
    }

    render() {
        return(
            <div className="col-3">
               <h3>{this.props.listName}</h3>
               <div className="card card-block">
                {this.renderCards()}
                </div>
                <button className="btn btn-warning btn-sm">Add card</button>
            </div>
        )
    }
}