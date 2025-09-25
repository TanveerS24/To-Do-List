import React, { useState, useEffect } from 'react'

import API from './lib/Axios'
import RecordCard from './helpers/RecordCard';

function App() {

  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get();
        setRecord(response.data);
        console.log("Data Fetch Success")
        console.log(record);
        console.log("response", response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [setRecord]);

  return (
    <>
    <div className='min-h-screen bg-cyan-950 text-4xl top-1.5 flex pt-4 justify-center'>
      <h1 className='underline decoration-dashed decoration-teal-200 text-5xl text-teal-500'>
        Welcome
      </h1>
    </div>
    </>
  )
}

export default App
