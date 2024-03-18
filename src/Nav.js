import React from 'react';
import {Link} from 'react-router-dom';

const Nav = function({dogs}){

    const dogLinks = dogs.map(dog => (
        <li><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
    ))

    return(
        <ul>
            {dogLinks}
        </ul>
    )
}

export default Nav;