import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Names from './Names';

function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [ names, setNames ] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then((res) => {
				setNames(res.data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	return <div className="App">{names.map((name) => <Names name={name.name} key={name.name} />)}</div>;
}

export default App;
