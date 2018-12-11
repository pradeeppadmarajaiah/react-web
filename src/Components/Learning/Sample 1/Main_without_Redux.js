import React from 'react';
import Header from '../../Header';
import TraceList from '../../TG/TraceList';
import Photowall from '../../Photowall';
import AddPhoto from '../../AddPhoto'
import { Route } from 'react-router-dom'


class Main extends React.Component {
    // Adding or Update post 
    constructor() {
        super()
        this.state = {
            posts: []
        };
        this.removePhoto = this.removePhoto.bind(this);

    }

    addPhoto(postSubmitted) {
        this.setState((state) => ({
            posts: this.state.posts.concat(postSubmitted)
        }))
    }

    //Using Route
    render() {
        return <div>
            <Route exact path="/" render={() => (
                <div>
                    <Header title="My Album" />
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;

                </div>
            )} />


            <Route path="/TraceList" component={TraceList} />
            <Route path="/AddPhoto" render={({history}) => (
                <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    console.log(this.state.posts);

                    //to redirect
                    history.push("/")
                }
                }
                />
            )} />

        </div>
    }


    componentDidMount() {
        console.log('componentDidMount()');
        const data = fecthDataFromDB();
        this.setState({
            posts: data
        })
    }


    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
}


function fecthDataFromDB() {
    return [{
        id: 0,
        description: "Medium",
        imageLink: "https://cdn-images-1.medium.com/fit/c/120/120/0*vVN6fLe1A_0EbuWS."
    },
    {
        id: 1,
        description: "11 - 11",
        imageLink: "http://11-11ventures.com/wp-content/uploads/2017/11/pradeep-about.jpg"
    },
    {
        id: 2,
        description: "Stack over flow",
        imageLink: "https://i.stack.imgur.com/4XuPL.jpg?s=328&g=1"
    }
    ];
}


export default Main;