import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PencilAltIcon,
    MenuIcon,
    HomeIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import {useSession} from "next-auth/react"


function Header() {
    const {data: session} = useSession();
    console.log(session)
    return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-6xl mx-5 lg:mx- auto'>
    {/* left */}
        <div className='relative hidden lg:inline-grid h-24 w-24 
        cursor-pointer'>
            <Image src="https://links.papareact.com/ocw" 
            layout="fill" alt="" objectFit='contain'/>
        </div>

    <div className='relative w-10 h-30 lg:hidden flex-shrink-0
    cursor-pointer'>
    <Image src="https://links.papareact.com/jjm" 
            layout="fill" alt="" objectFit='contain'/>
    </div>



    {/* Middle */}
    <div className='max-w-xs md:mt-3 sm:mt-0'>
        <div className='relative mt-1 p-3 rounded-md '>
            <div className='absolute inset-x-3 inset-y-0 pl-1 flex items-center 
            pointer-events-none '>
            <SearchIcon className='h-7 w-7 text-gray-500'/>
            </div> 
        <input className='bg-gray-300 block w-full pl-10 sm:text-sm
        border-gray-400  focus:ring-black focus:border-black
        rounded-md'
        type="text" placeholder="Search "></input>
        </div>  
    </div>
    
    {/* Right */}
    <div className='flex items-center justify-end 
    space-x-4'>
        
        <HomeIcon className="navBtn" />
        <MenuIcon className='h-10 w-10 md:hidden cursor-pointer'/>
        <div className='relative nvaBtn'>
          <PaperAirplaneIcon className='navBtn rotate-45'/>  
            <div className='absolute -top-2 -right-1 text-xs 
            w-5 h-5 bg-red-400 rounded-full flex items-center
            justify-center animate-pulse text-white'>3</div>
        </div>
        
        <PlusCircleIcon className='navBtn'/>
        <UserGroupIcon className='navBtn'/>
        <HeartIcon className='navBtn'/>
        <img src="https://pbs.twimg.com/media/FJZiatLakAIGXas.jpg:large" alt="profile pic"
        className='h-10  rounded-full cursor-pointer'/>
    </div>

    </div>
</div>
  )
}

export default Header