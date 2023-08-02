import React, { Component } from "react";

class Props extends Component {
  render() {
    return (
      <div>
        <h1 style={this.props.style}>
            {this.props.name}
            <Props1 name={this.props.name} style={this.props.style}/>
        </h1>
      </div>
    );
  }
}

function Props1(props) {
    return (
        <div>
            <h1 style={props.style}>{props.name}</h1>
        </div>
    );
}


export default Props;
