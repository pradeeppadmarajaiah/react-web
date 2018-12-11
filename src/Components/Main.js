import React from 'react';
import Header from './Header';
import TraceList from './TG/TraceList';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import Single from './Single'

class Main extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        this.props.loadPostfromDb().then(
            () => {
                this.setState(
                    { loading:false })
                });
        this.props.loadCommentsfromDb();
    }
    //Using Route
    render() {
        console.log(this.props)
        return <div>
            <h1>
                <Link to="/"> My Album </Link>
            </h1>
            <Route exact path="/" render={() => (
                <div>
                    <Photowall {...this.props} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;

                </div>
            )} />

            <Route path="/AddPhoto" render={({ history }) => (
                <AddPhoto {...this.props} onHistory={history} />
            )} />

            {/* params has entire data including history */}
            <Route path="/Single/:id" render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )}></Route>

        </div>
    }



}




export default Main;