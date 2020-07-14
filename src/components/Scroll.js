import React from 'react';
import './Scroll.css';
 

const Scroll = (props) => {
    return (
        <div id="scr">
            {props.children}
        </div>
    )
}

export default Scroll;