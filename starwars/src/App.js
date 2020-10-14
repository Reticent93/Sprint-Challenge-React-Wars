import React, {useEffect, useState} from 'react';

import './App.css';
import CharacterCard from "./components/CharacterCard";
import axios from "axios";
import Nav from "./components/Nav";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    const [names, setNames] = useState([])


    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
            .then(res => {
                setNames(res.data.results)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


  return (
    <div className="App">
      <Nav />
        {names.map(name =>
        <CharacterCard key={name.name} name={name.name} height={name.height } birth_year={name.birth_year} url={name.url} />
        )}
    </div>
  );
}

export default App;
