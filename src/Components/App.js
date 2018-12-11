import { connect } from 'react-redux'
import Main from './Main'
import { bindActionCreators } from 'redux';
import * as actions from '../redux/action'
import {withRouter} from 'react-router' 

//Connect to store to main component
function mapStateToProps(state) {
    return { posts: state.posts,
            comments:state.comments
    }
}


//Connect to store to main component
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)    
}

const App= withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App;
