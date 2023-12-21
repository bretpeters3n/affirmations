import * as React from "react";
import '../css/Button.css';

function Button(props) {
  return <div 
    type='button' 
    className={'Button primary'} 
    // aria-label='description' //icon only button, add aria-label='description'
    // aria-disabled='true' //disabled button, add aria-disabled='true'
    >
      {props.text}
    </div>;
}

export default Button;