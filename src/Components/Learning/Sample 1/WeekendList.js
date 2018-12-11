import React, { Component } from 'react';


const weekends = ['SAT', 'SUN'];
class WeekendList extends Component {
    render() {
        return weekends.map((weekend, index) => <li key={index}> {weekend} </li>)
    }
}

export default WeekendList;