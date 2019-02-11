import React from 'react';
import './Size.css';


const Size  = (props) =>  {

    return (
      <div>
        <p> Choose your Size :  </p>
<button onClick={props.handleSmall}> Small </button>
<button onClick={props.handleMedium}> Medium </button>
<button onClick={props.handleLarge}>  Large </button>
      </div>
    );

}

export default Size;