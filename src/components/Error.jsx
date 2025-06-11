import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {

    const Error = useRouteError();

    const navigate = useNavigate();

  return (
    <div className='job-details'>
        <h2>Oops! Something went wrong</h2>
        <p>{Error.message}</p>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <p>Please check the URL or go back to the homepage.</p>
        <button onClick={() => navigate('/')}>Go to Homepage</button>
    </div>
  )
}

export default Error