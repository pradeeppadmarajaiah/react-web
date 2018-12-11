import React from 'react';
import Header from './Header';
import TraceList from './TG/TraceList';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


class Main_Without_Router extends React.Component {
    // Adding or Update post 
    constructor() {
        super()
        // this.state={
        //     posts :  [{
        //         id: "0",
        //         description: "Medium",
        //         imageLink: "https://cdn-images-1.medium.com/fit/c/120/120/0*vVN6fLe1A_0EbuWS."
        //     },
        //     {
        //         id: "1",
        //         description: "11 - 11",
        //         imageLink: "http://11-11ventures.com/wp-content/uploads/2017/11/pradeep-about.jpg"},
        //     {
        //         id: "2",
        //         description: "Stack over flow",
        //         imageLink: "https://i.stack.imgur.com/4XuPL.jpg?s=328&g=1"
        //     }
        //     ]
        // }
        // Fetch from DB
        this.state = {
            posts: [],
            screen: "photos" //photos,addPhotos
        };
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
        console.log('constructor')
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    navigate() {
        this.setState({
            screen: 'addPhotos'
        })
    }


    render() {
        console.log('render()');
        return <div>
            {
                this.state.screen === 'photos' && (
                    <div>
                        <Header title="My Album" />
                        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <Header title="Traces" />
                        <TraceList players={['FP', 'SP', 'FM', 'GR', 'BR']} />
                    </div>
                )
            }
            {
                this.state.screen === 'addPhotos' && (
                    <div>
                        <AddPhoto></AddPhoto>
                    </div>
                )
            }
        </div>
    }



    componentWillMount() {
        console.log('componentWillMount()');
    }

    componentDidMount() {
        console.log('componentDidMount()');
        const data = fecthDataFromDB();
        this.setState({
            posts: data
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

}


function fecthDataFromDB() {
    return [{
        id: "0",
        description: "Medium",
        imageLink: "https://cdn-images-1.medium.com/fit/c/120/120/0*vVN6fLe1A_0EbuWS."
    },
    {
        id: "1",
        description: "11 - 11",
        imageLink: "http://11-11ventures.com/wp-content/uploads/2017/11/pradeep-about.jpg"
    },
    {
        id: "2",
        description: "Stack over flow",
        imageLink: "https://i.stack.imgur.com/4XuPL.jpg?s=328&g=1"
    }
    ];
}


export default Main;