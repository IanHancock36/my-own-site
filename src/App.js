import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
