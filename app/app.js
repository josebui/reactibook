import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './reducers'
import PrivateRoute from './auth/PrivateRoute'
import Home from './sections/Home'


const store = createStore(
	rootReducer, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const history = createHistory()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
			<Switch>
				<PrivateRoute exact path="/timeline" component={Home} />
				<PrivateRoute exact path="/" component={Home} />
			</Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
