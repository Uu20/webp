import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
function Story({img,username}) {
  return (
    <div>
        
        <Image className=" rounded-full p-[1.5px]
        border-red-500 border-2 object-contain cursor-pointer
        hover:scale-125 transition transform duration-200 ease-out"
        src= {img} alt="" layout='fixed'/>
        
        <p className='text-xs w-14 truncate
        text-center'>{username}</p>
    </div>
  )
}

export default Story