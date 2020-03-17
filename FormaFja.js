import React from 'react'
 function Forma(props){
    return (<form>
        <input type="text" />
        <button>{props.text}</button>
        </form>
        );
}
export default Forma;