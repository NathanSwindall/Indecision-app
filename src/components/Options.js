import React from 'react';
import Option from './Option'

const Options = (props) =>  (
        <div>
            <button onClick={props.handleDeleteOptions}>remove All</button>
            {props.options.map((option) => <Option 
                key={option} 
                optiontext = {option}
                handleDeleteOption = {props.handleDeleteOption}
                />
            )}
        </div>
    )


export default Options