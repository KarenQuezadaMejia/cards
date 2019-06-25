import React, {Component} from 'react';
import '../css/Cards.css';

class Cards extends Component{
    render(){
        return(
            <div className="Cards" alt = {this.props.alt} src= {this.props.src}>
            </div>
            )
    }
};    
export default Cards;