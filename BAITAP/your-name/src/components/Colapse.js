import React, { Component } from "react";

class Colapse extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <p>Để thể hiện các element bao gồm tiêu đề "Conditional Rendering" trong ReactJS, bạn có thể tạo một functional component và sử dụng phương thức render để thể hiện các element tương ứng.</p>
          <button onClick={this.props.Close}>Đóng</button>
        </div>
      </div>
    );
  }
}

export default Colapse;
