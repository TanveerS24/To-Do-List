import React, { useState, useEffect } from 'react'

import API from './lib/Axios'
import RecordCard from './helpers/RecordCard';

function App() {

  const [time, setTime] = useState(new Date());
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {time.toLocaleTimeString()}
      </div>
      <div className='bg-red-400'>
        Vankkam
      </div>
      <div>
        {record.map(rec  => 
          <RecordCard key={rec.id} record={rec} />
        )}
      </div>
    </>
  )
}

export default App
