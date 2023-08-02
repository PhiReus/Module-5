import React from 'react';

function FuncComponent(props) {
    return (
        <div>
            <h1>Total: {props.firstNumber + props.secondNumber}</h1>
        </div>
    );
}

export default FuncComponent;