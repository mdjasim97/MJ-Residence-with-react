import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className='flex flex-col justify-center min-h-screen items-center space-y-8'>
                <h1 className='text-9xl'>Opps...</h1>
                <p className='text-2xl'>404 Not found page</p>
                <button onClick={handleNavigate} className='btn'>Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;