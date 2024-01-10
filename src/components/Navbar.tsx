import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
const Navbar: FC<{}> = () => {

    return (
        <nav>
            <div className='w-full max-w-screen-xl mx-auto items-center py-8'>
                <div className='flex gap-60 items-center justify-between'>
                    <h1 className='text-black font-bold text-2xl'>FoodieFinder</h1>
                    <div className='flex gap-16 text-black font-medium'>
                        <a href="#" className='cursor-pointer'>Home</a>
                        <a href="#" className='cursor-pointer'>Menu</a>
                        <a href="#" className='cursor-pointer'>Service</a>
                        <a href="#" className='cursor-pointer'>Shop</a>
                    </div>
                    <div className="dropdown dropdown-end">
                        <button className='btn px-4 rounded-full bg-black text-white hover:bg-[#2A2A2A]'><BsSearch className='font-bold' /></button>
                        <ul tabIndex={0} className="dropdown-content z-[1] mt-2 menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <input type="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        // <div className='flex justify-center'>
        //     <div className='max-w-screen-xl w-full bg-white rounded-full shadow-2xl mb-10 mt-5 fixed z-50'>
        //         <div className='px-10 py-5 w-full flex justify-center items-center '>
        //             <div className='flex gap-2'>
        //                 <svg className="h-7 w-7 text-black" >
        //                     <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //                         <path d="M18 8h1a4 4 0 0 1 0 8h-1" />  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        //                         <line x1="6" y1="1" x2="6" y2="4" />  <line x1="10" y1="1" x2="10" y2="4" />  <line x1="14" y1="1" x2="14" y2="4" />
        //                     </svg>
        //                 </svg>
        //                 <p className='font-bold text-lg antialiased text-black'>FoodieFinder</p>
        //             </div>
        //             <form action="" method='get' className="relative">
        //                 <input type="search" required name='search' className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-black border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4 " />
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        //                 </svg>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar