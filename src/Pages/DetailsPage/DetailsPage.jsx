import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({children}) => {

    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>This is a Details Page {id}</h1>
        </div>
    );
};

export default DetailsPage;