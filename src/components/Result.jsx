import React from 'react'
import { useNavigate } from "react-router-dom";


function Result() {
    const navigate = useNavigate();
  return (
    <div className='resultcontainer fixed flex flex-col items-center justify-center h-screen w-screen bg-white z-10 leading-4'>
    <div className='text-6xl'>Dont worry about marks,</div>
    <div className='text-4xl'>you did great . hope you had fun</div>
    <button aria-label='start quiz' className='cursor-pointer border-[1px] h-fit bg-blue-600 m-8 text-white rounded-[10px] px-5 py-2' onClick={()=>navigate("/")} >Home</button>
    </div>
  )
}

export default Result