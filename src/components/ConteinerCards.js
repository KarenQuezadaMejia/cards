import React, {Component} from 'react';
import '../css/Conteiner.css';
import Cards from './Cards';

class ConteinerCards extends Component{
    render(){
        return (
            <section className= "ConteinerCards">
            {
                this.props.constructorDeck.map((element)=> <Card icon= {element.icon} number={element.number} />)
            }
            </section>
        );
    }
} 
export default ConteinerCards;
