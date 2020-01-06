import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App: React.FC = () => (
	<Provider store={store}>
		<div className='App'>
			<h1>React App Test 2 fa-rotate-270</h1>
			<h2>Hello</h2>
		</div>
	</Provider>
);

export default App;
