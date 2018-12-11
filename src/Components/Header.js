import React, { Component } from 'react';

function Header(props) {
    return  (<h1>{props.title}</h1>)
}

// class Header extends Component {
//     render() {
//         return (<h1>{this.props.title}</h1>)
//     }
// }
export default Header;