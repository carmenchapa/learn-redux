function postComments(state = [], action) {	
	switch(action.type) {
		case 'ADD_COMMENT':
			//return the new state with the new comment
			return [...state,{
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT':
			console.log("removing a comment");
			//we need to return the new state without the deleted comment
			return [
			//from the start to the one we watn to delete
				...state.slice(0,action.i),
				//after the deleted one, to the end
				...state.slice(action.i + 1)
			]
			return state;
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			//take the current state
			...state,
			//overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments