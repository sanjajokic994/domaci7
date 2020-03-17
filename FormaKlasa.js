import React, { Component } from 'react'

 class Forma extends Component{
    render(){
        return(<form>
            <input type="text" />
            <button>{this.props.text}</button>
            </form>
            );
    }
}

export default Forma;