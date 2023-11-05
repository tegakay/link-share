import React from 'react'
import Link from 'next/link'

interface formParams {
  id: string;
  urltype?: string;
  url?: string;
}


const LinkPanel = ({id,urltype,url}:formParams) => {
  return (
    <div className='w-6/6 text-center '>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link href={url ? url : '/'}>{urltype? urltype :'No description'}</Link></button>
 
    </div>
  )
}

export default LinkPanel