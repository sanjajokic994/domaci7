import React, { Component } from 'react'

import Smajli from './smajliKlasa'
import Opis from './opisKlasa'


 class Card extends Component{
    render(){
        return(<><Smajli url={this.props.url}/>
         <br/> 
         <Opis opis={this.props.opis}/>
         <br/>
         </>
         );
    }
}


export default Card;