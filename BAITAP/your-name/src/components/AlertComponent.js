import React from 'react';

function AlertComponent(props) {
    return (
        <div class="alert alert-warning" role="alert">
            <h3><em>Warning: {props.text}</em></h3>
        </div>
    );
}

export default AlertComponent;