import { bidActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'
import Main from './Main'


function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}


function mapDispatchToProps(dispatch) {
	return  bidActionCreators (actionCreators, dispatch);
}



const App = connect(mapStateToProps, mapDispatchToProps)

export defaul App