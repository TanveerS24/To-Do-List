import React from 'react'
import { useEffect } from 'react';

import API from './lib/Axios'

function App() {

  useEffect(() => async () => {
    try {
      const response = await API.get();
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  return (
    <>
      <div className='bg-red-400'>
        Vankkam
      </div>
    </>
  )
}

export default App
