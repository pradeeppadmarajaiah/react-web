import React, { Component } from 'react';

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Photo(props) {
    const post = props.post

    return <figure className="figure">

        <Link to={`/Single/${post.id}`}> <img className="photo" src={post.imageLink} alt="wow" /> </Link>

        <figcaption><p>{post.description}</p></figcaption>
        {/* <div className="button-container">
            <button className="remove-button" onClick= { () =>  {
                props.onRemovePhoto(post);
            }
            }> Remove </button></div> */}
        <div className="button-container">
            <button className="remove-button" onClick={() => {
                props.removePost(props.index);
                props.history.push("/")
            }
            }> Remove </button></div>

            
    </figure>
}

// class Photo extends Component {

//     render() {
//         const post = this.props.post

//         return <figure className="figure">
//             <img className="photo" src={post.imageLink} alt="wow" />
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className="button-container">
//                 <button className="remove-button"> Remove </button></div>
//         </figure>
//     }
// }


// Photo.propTypes= {
//     post : PropTypes.object.isRequired,
//     onRemovePhoto :PropTypes.func.isRequired
// };

export default Photo;