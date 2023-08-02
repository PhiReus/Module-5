import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2>xin chao</h2>
                <Header1/>
            </div>
        );
    }
}

class Header1 extends Component {
    render() {
        return (
            <div>
                <h2>xin chao em</h2>
            </div>
        );
    }
}

export default Header;