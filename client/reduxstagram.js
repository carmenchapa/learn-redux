import React from 'react'
import { render } from 'react-dom'
//import css
import css from './styles/style.styl'
//components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

import Raven from 'raven-js'
import { sentry_url, logException } from './data/config'

/*
Raven.config(sentry_url, {
	tags: {
		git_commit: 'asdgha',
		userLevel: 'editor'
	}
}).install();

Raven.captureMessage('something bad happened!')
Raven.showReportDialog();
// logException(new Error('download filed!'), {
// 	email: 'cmchapa28@gmail.com'
// });

// console.log(store.doesNot.nope())
*/


const router = (
	<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
	</Provider>
	)

render(router, document.getElementById('root'));