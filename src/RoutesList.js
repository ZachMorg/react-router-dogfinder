import {Routes, Route, Navigate} from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';


const RoutesList = function({dogs}){
    return(
        <Routes>
            <Route
                path='/dogs/:name'
                element={<DogDetails dogs={dogs} />}
            />
            <Route
                path='/dogs'
                element={<DogList dogs={dogs} />}
            />
            <Route
                path='/*'
                element={<Navigate to='/dogs'/>}
            />
            
        </Routes>
    )
}

export default RoutesList;