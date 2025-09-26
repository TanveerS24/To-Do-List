import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    
  return (
    <>
        <div className='bg-[#B2EBF2] text-[#004D40] p-4'>
            <div className='grid grid-cols-3'>
                <div className='flex items-center justify-center'>
                    <a href="https://www.linkedin.com/in/s-tanveer-muhammed-611b89336/" 
                        target='_blank' rel='noopener norefferer'
                        className='flex items-center gap-2'>
                        <FaLinkedin size={30}/> 
                        <span className='font-semibold'>
                            S Tanveer Muhammed
                        </span>
                    </a>
                </div>
                <div className='flex items-center justify-center'>
                     <a href="https://github.com/TanveerS24" 
                        target='_blank' rel='noopener norefferer'
                        className='flex items-center gap-2'>
                        <FaGithub size={30}/> 
                        <span className='font-semibold'>
                            TanveerS24
                        </span>
                    </a>
                </div>
                <div className='flex items-center justify-center'>
                    <a href="https://www.instagram.com/epicblue06/" 
                        target='_blank' rel='noopener norefferer'
                        className='flex items-center gap-2'>
                        <FaInstagram size={30}/> 
                        <span className='font-semibold'>
                            @epicblue06
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
