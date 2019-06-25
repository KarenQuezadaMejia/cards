import React, {Component} from 'react';
import '../css/Conteiner.css';
import Cards from './Cards';

class Conteiner extends Component{
    constructor(props){
        super(props)
        this.state ={
            url: ""
        }
    }
    render(){
        const cards = [1,2,3,4,5,6,7,8];
        return (
            <section className= "BoxConteiner">
              {
                  cards.map((cards)=> 
                  <Cards></Cards>)
              }
            </section>
        );
    }
} 
export default Conteiner;
