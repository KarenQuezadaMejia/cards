import React, {Component} from 'react';
import '../css/Cards.css';

class Cards extends Component{
    render(){
        return(
            <div className="Card">
            <i className={`fa ${this.props.icon} fa-2x`}></i>
            <p>{this.props.number}</p>
            </div> 
        );
    }
} 
export default Cards;