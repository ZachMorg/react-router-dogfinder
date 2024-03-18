import React from 'react';
import {Link} from 'react-router-dom';


const DogList = function({dogs}){
    const dogElements = dogs.map(dog => (
        <div>
            <img src={`/${dog.src}.jpg`}/>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </div>
    ))

    return(
        <div>
            {dogElements}
        </div>
    )
}

export default DogList;