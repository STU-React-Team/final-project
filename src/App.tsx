import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App: React.FC = () => (
	<Provider store={store}>
		<div className='App'>
			<h1>React App Test</h1>
		</div>
	</Provider>
);

export default App;
