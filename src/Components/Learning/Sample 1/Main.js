import React from 'react';
import MonthList from './MonthList';
import Header from './Header';
import WeekDayList from './WeekDayList';
import WeekendList from './WeekendList';

class Main extends React.Component {
    render() {
        return <div>
            <Header title="Week Names" />
            <ol>
                <WeekDayList />
                <WeekendList />
            </ol>
            <h1>Month List</h1>
            <MonthList months={["Jan", "Feb", "Mar"]} />
        </div>
    }
}

export default Main;