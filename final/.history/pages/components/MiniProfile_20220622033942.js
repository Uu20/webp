import React from 'react'
import {signOut, useSession} from "next-auth/react"

function MiniProfile() {
    const{data:session}=useSession();
  return (
    <div className='flex items-center 
    justify-between mt-14 ml-10'>
        <img className='w-16 h-16 rounded-full border p-[2px] ' 
        src='https://thumbor.4gamers.com.tw/7mKUQMwhBM7MKadnicztyEWT1JI=/adaptive-fit-in/1200x1200/filters:no_upscale():extract_cover():format(jpeg):quality(85)/https%3A%2F%2Fugc-media.4gamers.com.tw%2Fpuku-prod-zh%2Fanonymous-story%2F3e29bb69-e91d-4d50-8faf-c5b9393f91e0.jpg' 
        alt=''/>
        
        <div className='flex-1  mx-5'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-500'>come</h3>
        </div>

        <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile