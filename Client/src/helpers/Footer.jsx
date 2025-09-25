import React from "react";
import { useEffect, useState } from "react";

const Footer = (() =>{
    const [time, setTime] = useState(new Date());
    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed z-10 bottom-2 left-2 bg-transparent font-bold text-amber-50">
        {time.toLocaleTimeString()}
    </div>
  );
})

export default Footer;