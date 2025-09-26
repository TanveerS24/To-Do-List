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
    <div className='absolute bottom-2.5 left-2.5 text-[#006064] bg-[#99e8f2] rounded-full px-4 py-2 shadow-md hover:scale-105
        transition-all ease-out duration-150 hover:text-[#025154] hover:bg-[#7fe7f5]'>
      {time.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})}
    </div>
  </>
)

}

export default Timer
