import React, { Component } from 'react'

 class Smajli extends Component{
    render(){
        return(
        <img src={this.props.url} alt='' style={{width:"300px", height:"300px"}}/>
        );
    }
}

export default Smajli;