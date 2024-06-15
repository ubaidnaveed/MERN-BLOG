import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
  const navigate = useNavigate()
  const [formData,setFormData]= useState({})
  const [errorMessage,setErrorMessage] = useState(null)
  const [loading,setLoading] = useState(false)
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSumbit = async(e) =>{
    e.preventDefault()
    if(!formData.password || !formData.email){
      return setErrorMessage("All fields are required")
      
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch ('api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success===false){
        setLoading(false)
        return setErrorMessage(data.message)
      }else{
        setLoading(false)
        
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }
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
          This is my practice project. U can sign-in using email and password or with google. 
        </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSumbit}>
            
            <div className='flex flex-col'>
            <label className='font-semibold'>Email</label>
            <input onChange={handleChange}
            className='rounded-lg shadow-lg'
            type='email'
            placeholder='name@company.com'
            id='email'/>
            </div>
            <div className='flex flex-col'>
            <label className='font-semibold'>Password</label>
            <input onChange={handleChange}
            className='rounded-lg shadow-lg'
            type='password'
            placeholder='********'
            id='password'/>
            </div>
            <button disabled={loading} className='w-80 h-9 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white rounded-lg'>
              {loading? 'Loading...':'Sign In'}
            </button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
          <span>Don't Have an Account?</span>
          <Link to='/sign-up' className='text-blue-500'>
          Sign In
          </Link>
          </div>
          {errorMessage && (
            <p className='text-red-500 text-sm'>{errorMessage}</p>
          )}
          </div>
       
     
      </div>
    </div>
  )
}
