import React, { Component } from "react";
import Home from "./Home"
class LogInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  handleLogin = () => {
    this.setState({ login: true });
  };
  handleLogOut = () => {
    this.setState({ login: false });
  };
  render() {
    const { login } = this.state;
    if (login) 
    return <Home onLogOut={this.handleLogOut} />;
    
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1>Vui long dang nhap</h1>
          <button onClick={this.handleLogin}>Log In</button>
        </div>
      </div>
    );
  }
}

export default LogInComponent;
