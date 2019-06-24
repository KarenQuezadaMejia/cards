import React, {Component} from 'react';
import Button from './Button';
/* 
class Conteiner extends Component{
render (){
    const cards =  require[("../data/imgdata")];
    return (
        <div className = "container">
            {cards.map((card)=> <span>{card}</span>)}
        </div>
    );
}
}
export default Conteiner; */

const cards = require ("../data/dataimg");
class Conteiner extends Component{
     constructor (){
         super();
         this.state ={
             cards,
         }
     }
     render (){
         const imgcards = cards.wondersWorld.map((product)=> {
             return (
                <Button rol={product.item + "" + product.img} customOnButtonClick={() => { this.props.nameProduct(menubreakfast) }} />

             )
         })
         return(
            <div className = "container">
                {imgcards}
            </div>
         );
     }
 }  

export default Conteiner;