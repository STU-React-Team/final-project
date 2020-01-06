import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

type Compose = typeof compose;
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
