import React, {Component} from 'react';
import img from '../function/imgCards';
import deck from '../function/deck';
import ConteinerCards from './ConteinerCards';

class Conteiner extends Component {
    render(){
        return(
            <div className="board">
            {
                this.props.builtDeck
            .map((element)=> <Card icon= {element.icon} number={element.number} />)
            }
            </div> 
        );
    }
}
export default Conteiner