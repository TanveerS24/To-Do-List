import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    
  return (
    <>
        <div className='bg-cyan-800 p-4'>
            <div className='grid grid-cols-3'>
                <div className='flex items-center justify-center'>
                    <FaLinkedin size={30}/>
                    <a href=""></a>
                </div>
                <div className='flex items-center justify-center'>
                    <FaGithub size={30}/>
                    <a href=""></a>
                </div>
                <div className='flex items-center justify-center'>
                    <FaInstagram size={30}/>
                    <a href=""></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
