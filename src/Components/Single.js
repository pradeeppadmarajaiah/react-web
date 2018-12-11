import React, { Component } from 'react';
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {

    render() {
        const {match,posts}= this.props;
        const id=Number(match.params.id)
        const post = posts.find((post) => post.id===id)
        const comments=this.props.comments[id] || [];

        const index=this.props.posts.find((post)=> post.id === id );
        if(this.props.loading) {
            return <div className="loader">Loading...</div>
        }
        else{
        console.log(this.props)
        return <div className='single-photo'>
            <Photo post={post} index={index}></Photo>
           <Comments  addCommenttoDb={this.props.addCommenttoDb} comments={comments} id={id} />
        </div>
        }
    }
}

export default Single;