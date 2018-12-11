import React, { Component } from 'react';
import Photo from './Photo';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

function Photowall(props) {

    return <div>
        {/* <button className="add-icon" onClick={props.onNavigate}></button> */}
        {/* <a onClick={props.onNavigate} className="add-icon" href="#addPhoto"> </a> */}
        {/* <Link onClick={props.onNavigate} className="add-icon" to="/AddPhoto"> </Link> */}
        <Link className="add-icon" to="/AddPhoto"> </Link>
        {/* <Link to="/TraceList"> Test </Link> */}
        {/* <div className="photo-grid">
            {props.posts.sort((x,y)=>(y.id-x.id)).map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div> */}
        <div className="photo-grid">
            {props.posts.sort((x, y) => (y.id - x.id)).map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
        </div>
    </div>

}

// class Photowall extends Component {

//     // render() {
//     //     return (<div>
//     //         {
//     //             this.props.posts.map((post,index) => <img key ={index} src={post.imageLink}  alt="wow"/> )
//     //         }

//     //     </div>)
//     // }

//     render() {
//         return <div className="photo-grid">
//             {
//                 this.props.posts.map((post, index) => <Photo key={index} post={post} />)
//             }

//         </div>
//     }


// }

// Photowall.propTypes= {
//     posts : PropTypes.arrary.isRequired,
//     onRemovePhoto :PropTypes.func.isRequired
// };

export default Photowall