import React, { Component } from 'react';
import Colapse from './Colapse'
class Expand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }
    handleExpand = () => {
        this.setState({expand: true})
    }
    handleClose = () => {
        this.setState({expand: false})
    }


    render() {
        if(this.state.expand === true)
        return <Colapse Close={this.handleClose}/>
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Conditional Rendering</h1>
                <button onClick={this.handleExpand}>Mở</button>  
            </div>
        );
    }
}

export default Expand;