
import React from 'react'
//npm i flowbite-react
import { Link } from 'react-router-dom';

import { FaMoon, FaSearch, FaSun } from 'react-icons/fa';

export default function Header() {

  return (
    
    <header className='bg-gradient-to-r from-indigo-500 via-white to-pink-500 shadow-md'> 
    <div className="flex justify-between items-center max-w-6xl mx-auto " >
    <Link to='/'>
    <h1 className='font-bold text-lg sm:text-xl flex flex-wrap dark:text-white'>
        <span className='text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        Ubilicious
        </span>
        <span className='text-black'>
        Blogs
        </span>
        </h1>
        </Link>
        <form 
        className=' bg-transparent p-2 rounded-lg flex items-center '>
        <input
         type="text" placeholder="Search..." className='bg-transparent border-none focus:outline-none w-24 sm:w-60 h-9' />
        <button>
        <FaSearch className='text-slate-400'/>
        </button>
        
        </form>
        <ul className='flex gap-4 dark:text-white'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'> Home </li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'> About </li>
        </Link>
        <Link to='/projects'>
        
          <li className='hidden sm:inline text-slate-700 hover:underline'> Projects</li>
       
      </Link>
        </ul>
        
        
       
       
        <Link to='/sign-in'>
        <button className='font-semibold w-20 h-9 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          Signin
        </button>
        </Link>
        
    </div>
        
        </header>
  )
}
