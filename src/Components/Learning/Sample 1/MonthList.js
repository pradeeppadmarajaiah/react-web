import React, { Component } from 'react';


class MonthList extends Component {
    render() {
        return (<ol>{this.props.months.map((month, index) => <li key={index}> {month} </li>)}</ol>)

    }
}

export default MonthList