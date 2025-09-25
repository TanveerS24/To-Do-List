import React from 'react'
import { useEffect,useState } from 'react'
import API from "../lib/Axios"
import RecordCard from '../Helpers/RecordCard'

const Home = () => {
    const [record,setRecord] = useState([]);

    useEffect(() => {
        const fetchRecords = async () => {
            console.log("Fetching data");
            const res = await API.get();
            console.log(res.data);
            setRecord(res.data);
        }
        fetchRecords();
    }, []);

    return (
        <div className='min-h-screen bg-cyan-950 -z-10'>
            {record.map((rec) => {
                return <RecordCard key={rec.id} record={rec} />;
            })}
        </div>
    )
}

export default Home
