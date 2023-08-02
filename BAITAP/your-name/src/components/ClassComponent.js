import {Component} from 'react';

class ClassComponent extends Component {
    render() {
        return <h1>Total: {this.props.fristNumber + this.props.secondNumber}</h1>
    }
}
export default ClassComponent;

