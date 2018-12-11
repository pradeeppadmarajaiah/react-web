import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';

// const header = React.createElement("h3", null, "Hello Pradeep!!!!. Welcome to REACT world.");
// const text=React.createElement("h3", null, " Welcome to REACT world.");
// const weekends = ['SAT', 'SUN'];
// const weekdays = ['MON', 'TUE', 'WED', 'THUR', 'FRI']
// const week = React.createElement('ul', null,

//     React.createElement("li", null, "MON"),
//     React.createElement("li", null, "TUE"), React.createElement("li", null, "WED"),
//     React.createElement("li", null, "THUR"), React.createElement("li", null, "FRI"),
//     weekends.map((weekend,index) => React.createElement("li", {key : index}, weekend))

// );
//Same as Create element .Prop set to index

//Encapsulate to one tag to div, if there are two tags like h1 and ol
// const week = <div>
//     <h1>Week Name</h1>
//     <ol>
//         {weekdays.map((weekday, index) => <li key={index}> {weekday} </li>)}
//     </ol></div>

// ReactDOM.render(week, document.getElementById('WOW'));

//Creating the component
//Component 1
// class WeekDayList extends Component {
//     render() {
//         return weekdays.map((weekday, index) => <li key={index}> {weekday} </li>)

//     }
// }

// class WeekendList extends Component {
//     render() {
//         return weekends.map((weekend, index) => <li key={index}> {weekend} </li>)

//     }
// }

// class MonthList extends Component {
//     render() {
//         return (<ol>{this.props.months.map((month, index) => <li key={index}> {month} </li>)}</ol>)

//     }
// }

// //Component 2
// class Header extends Component {
//     render() {
//         return (<h1>{this.props.title}</h1>)
//     }
// }

// //Main component is a combination of Component 1 and Component 2
// class Main extends React.Component {
//     render() {
//         return <div>
//             <Header title="Week Names"/>
//             <ol>
//                 <WeekDayList />
//                 <WeekendList />
//             </ol>
//             <h1>Month List</h1>
//             <MonthList months={["Jan", "Feb", "Mar"]} />
//         </div>
//     }
// }

// ReactDOM.render(<Main />, document.getElementById('WOW'));

//Sample 4
ReactDOM.render(<Main />, document.getElementById('WOW'));