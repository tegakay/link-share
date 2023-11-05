import React from 'react'
import { AiOutlinePaperClip } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';



const Navbar = () => {
  return (
    <div className='flex justify-between px-2 m-2'>
        <div className="logo"> ab</div>
        <div className="navigation flex mx-4 ">
          <button className='flex mx-2 font-bold py-2 px-4 rounded bg-gray-300 hover:bg-gray-400'>
            <AiOutlinePaperClip/>
           <span className=' sm:none'> Links</span>
          </button>
          <div className='flex mx-2 font-bold py-2 px-4'>
            <CgProfile/>
            <span className=' sm:none'>Profile Details</span>
          </div>
        </div>
        <div className="preview bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Preview</div>
    </div>
  )
}

export default Navbar