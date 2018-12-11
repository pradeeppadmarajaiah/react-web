import React, { Component } from 'react';

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.link.value;
        let desc = event.target.elements.desc.value;

        const post = {
            id: Number(new Date()),
            description: desc,
            imageLink: link
        }
        
        if (desc && link) {
            
            this.props.addPosttoDb(post);
            this.props.onHistory.push("/");
        }

        // fetch(`http://api.icndb.com/jokes/random/`).then((res) => {
        //     return res.json();
        // }).then((response) => {
        //     console.log(response)
        //     desc = response.value.joke;
        //     const post = {
        //         id: Number(new Date()),
        //         description: desc,
        //         imageLink: link
        //     }
        //     if (desc && link) {
        //         this.props.onAddPhoto(post)
        //     }
        // }).catch((err) => {
        //     console.log(err);
        // });



    }

    render() {
        return (

            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" required placeholder="Image Link" name="link" />
                        <input type="text" required placeholder="Description" name="desc" />
                        <button name="post">Post</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddPhoto;