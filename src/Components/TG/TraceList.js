import React from 'react';
import Header from '../Learning/Sample 1/Header'
const players = ['FP', 'SP', 'FM', 'GR', 'BR'];

class TraceList extends React.Component {

    render() {
        return (<div><Header title="Traces" />
            <ol>
                {
                    players.map((player, index) =>
                        <li key={index}> {player} </li>

                    )}</ol></div>)
    }
}

// class TraceList extends React.Component {

//     render() {
//         return (
//             <div>
//             <Header title="Traces" />
//         <ol>{this.props.players.map((month, index) => <li key={index}> {month} </li>)}</ol></div>)
//     }
// }

export default TraceList;