import React, {useEffect, useState} from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard";

function Characters() {
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
        <div>
            {names.map(name =>
                <CharacterCard key={name.id} />
                )}
        </div>
    );
}

export default Characters;