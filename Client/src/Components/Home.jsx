import React from 'react'
import { useEffect,useState } from 'react'
import RecordCard from './RecordCard'

const Home = () => {
  const [records,setRecords] = useState([]);

  const fakeRecords=[{"id":1,"title":"Call that idiot","completed":false},{"id":2,"title":"Send Email","completed":false},{"id":3,"title":"Chop vegetables","completed":false}];

  useEffect(() => {
    console.log(fakeRecords)
    setRecords(fakeRecords);
  },[setRecords])
  
  return (
    <>
      <div className="flex items-center justify-center pt-6 font-medium text-[#006064] text-5xl 
      underline italic font-tahoma" style={{fontFamily:"Verdana, sans-serif"}}>
        To-Do List
      </div>
      {records.map((record) => (
        <RecordCard key={record.id} record={record} />
      ))}
    </>
  )
}

export default Home
