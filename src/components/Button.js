import React, {Component} from 'react';

class Button extends Component{

    constructor (props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.customOnButtonClick();
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.props.rol}</button> 
        )
    }
}    
export default Button;