import React from 'react';
import {Link, useParams} from 'react-router-dom';


const DogDetails = function({dogs}){
    const {name} = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    return(
        <div>
            <img src={`/${dog.src}.jpg`}/>
            <h1>{dog.name}</h1>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact) => (
                    <li>{fact}</li>
                ))}
            </ul>
            <Link to='/dogs'>Back</Link>
        </div>
    )
}

export default DogDetails;