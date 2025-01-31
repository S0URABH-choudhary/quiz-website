import React from 'react'
import { useNavigate } from "react-router-dom";


function Home_page() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper h-screen w-screen flex items-center justify-center">
    <div className='home-content-container flex flex-col items-center justify-center leading-6'>
      <h1 className='text-7xl'>Learn, Play, and Grow</h1>
      <h2 className='text-7xl opacity-30'>all in one place</h2>
      <p className='mt-[10px]'>Sharpen Your Skills and boost your productivity.</p>
      <button aria-label='start quiz' className='cursor-pointer border-[1px] bg-blue-600 m-8 text-white rounded-[10px] px-5 py-2' onClick={()=>navigate("/quiz")} >Start quiz</button>
    </div>
    </div>
  )
}

export default Home_page