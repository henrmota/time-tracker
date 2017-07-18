import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { timeSessionsReducer } from '../reducers'
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics'

var store
export default {

	configure: (initialState) => { // initialState can be null
		
		const epicMiddleware = createEpicMiddleware(rootEpic);
		const middleware = applyMiddleware(epicMiddleware);

		const reducers = combineReducers({ // insert reducers here
			time_sessions: timeSessionsReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
				initialState,
				middleware
			)

			return store
		}

		store = createStore(
		    reducers,
		    middleware
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
