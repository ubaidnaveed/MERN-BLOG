import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 mr-1 ml-1'>
      <div className='flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to='/'>
    <h1 className='font-bold text-4xl  flex flex-wrap dark:text-white'>
        <span className='text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        Ubilicious
        </span>
        <span className='text-black'>
        Blogs
        </span>
        </h1>
        </Link> 
        <p className='text-sm mt-5'>
          This is my practice project. U can sign-up using email an password or with google. 
        </p>
        </div>
        <div flex-1>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col '>
            <label className='font-semibold'>Username</label>
            <input 
            className='rounded-lg shadow-lg'
            type='text'
            placeholder='Username'
            id='username'/>
            </div>
            <div className='flex flex-col'>
            <label className='font-semibold'>Email</label>
            <input 
            className='rounded-lg shadow-lg'
            type='text'
            placeholder='name@company.com'
            id='email'/>
            </div>
            <div className='flex flex-col'>
            <label className='font-semibold'>Password</label>
            <input 
            className='rounded-lg shadow-lg'
            type='text'
            placeholder='Password'
            id='password'/>
            </div>
            <button className='w-80 h-9 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white rounded-lg'>
              Sign Up
            </button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
          <span>Have an Account?</span>
          <Link to='/sign-in' className='text-blue-500'>
          Sign In
          </Link>
          </div>
          </div>
       
     
      </div>
    </div>
  )
}
