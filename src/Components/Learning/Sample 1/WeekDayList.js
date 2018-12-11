import React, { Component } from 'react';


const weekdays = ['MON', 'TUE', 'WED', 'THUR', 'FRI']
class WeekDayList extends Component {
    render() {
        return weekdays.map((weekday, index) => <li key={index}> {weekday} </li>)
    }
}

export default WeekDayList;