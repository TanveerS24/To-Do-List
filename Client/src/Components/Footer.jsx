import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    
  return (
    <>
        <div className='bg-cyan-800 p-4'>
            <div className='grid grid-cols-3'>
                <div className='flex items-center justify-center'>
                    <a href="https://www.linkedin.com/in/s-tanveer-muhammed-611b89336/" 
                        target='_blank' rel='noopener norefferer'>
                        <FaLinkedin size={30}/>
                    </a>
                </div>
                <div className='flex items-center justify-center'>
                     <a href="https://github.com/TanveerS24" 
                        target='_blank' rel='noopener norefferer'>
                        <FaGithub size={30}/>
                    </a>
                </div>
                <div className='flex items-center justify-center'>
                    <a href="https://www.instagram.com/epicblue06/" 
                        target='_blank' rel='noopener norefferer'>
                        <FaInstagram size={30}/>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
