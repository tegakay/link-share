import CreateLink from '@/components/CreateLink'
import MobileScreen from '@/components/MobileScreen'
import Navbar from '@/components/Navbar'
import React from 'react'

const Editor = () => {
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-2 gap-2 '>
            <div  className='col-span-1 border border-black'>
                <MobileScreen/>
            </div>
            <div className='col-span- border border-black'><CreateLink/></div>

        </div>
    </div>
  )
}

export default Editor