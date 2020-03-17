import React from 'react'
import Smajli from './smajliFja'
import Opis from './opisFja'

 function Card(props){
    
    return (<>
    <Smajli url={props.url}/>
    <br/> 
     <Opis opis={props.opis}/>
     <br/>
     </>
     );
}


export default Card;