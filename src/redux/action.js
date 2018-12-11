import database from "../database/config"


export let addCommenttoDb = (comment, postId) => {
    return (dispatch) => {
        return database.ref('comments/'+postId).push({comment}).then(
            () => {
                dispatch(addComment(comment,postId))
            }
        )
    }
}


export let addPosttoDb = (post) => {
    return (dispatch) => {
        return database.ref('post').update({
            [post.id]: post
        }).then(
            () => {
                dispatch(addPost(post))
            }
        )
    }
}

export let removePostfromDb = (index,id) => {
    return (dispatch) => {
        return database.ref(`post/${id}`).remove().then(
            () => {
                dispatch(removePost(index))
            }
        )
    }
}

export let loadPostfromDb = () => {
    return (dispatch) => {
        return database.ref('post').once('value').then(
            (snapshot) => {
                let posts = []
                snapshot.forEach((value) => {
                    posts.push(value.val())
                })
                dispatch(loadPosts(posts))
            }
        )
    }
}

//works .unable to display. Removing dispatch as of now
export let loadCommentsfromDb = () => {
    return (dispatch) => {
        return database.ref('comments').once('value').then(
            (snapshot) => {
                let comments = {};
                snapshot.forEach((value) => {
                  let vals=value.val()
                  let keyV=value.key;
                    console.log(value.key)
                    comments[value.key]=value.key;
                })
                //   dispatch(loadComments(comments))
            }
        )
    }
}

//remove
export let removePost = (index) => {
    console.log("Action : " + index)
    return {
        type: 'REMOVE_POST',
        index: index
    }
};

export let addPost = (post) => {
    console.log("inside add")
    return {
        type: 'ADD_POST',
        post: post

    }
};


export let addComment = (comment, postId) => {
    return {
        type: 'ADD_COMMENT',
        comment: comment,
        postId: postId
    }
}

export let loadPosts = (posts) => {
    return {
        type: 'LOAD_POSTS',
        posts: posts
    }
}

export let loadComments = (comments) => {
    return {
        type: 'LOAD_COMMENTS',
        comments: comments
    }
}