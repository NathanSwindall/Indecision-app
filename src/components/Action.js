import React from 'react';


const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled = {!props.hasOptions}
            >فشار دادن</button>
        </div>
    )

}

export default Action
