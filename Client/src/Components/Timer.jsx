import React from 'react'
import { useState,useEffect } from 'react';

const Timer = () => {
    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, [])
  return (
    <>
        <div className='absolute bottom-1 left-1 text-[#006064]'>
            {time.toLocaleTimeString()}
        </div>
    </>
  )
}

export default Timer
