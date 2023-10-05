import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import { filterByName } from '../store/ProductSlices'
import { useNavigate } from 'react-router-dom'

const Navbar: FC<{}> = () => {
    const [search, setSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {detailMeals} = useAppSelector(state => state.product)
    const myPromise = ()=>Promise.resolve(dispatch(filterByName(search)))

    const submit = (e:any) => {
        e.preventDefault()
        // myPromise().then((res:any) => {
        //     console.log(res)
        //     navigate(`/meals/detail/${res}`)
        // })
    }
    return (
        <div className='flex justify-center'>
            <div className='max-w-screen-xl w-full bg-white rounded-full shadow-2xl mb-10 mt-5 fixed z-50'>
                <div className='px-10 py-5 w-full flex justify-center items-center '>
                    <div className='flex gap-2'>
                        <svg className="h-7 w-7 text-black" >
                            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" />  <line x1="10" y1="1" x2="10" y2="4" />  <line x1="14" y1="1" x2="14" y2="4" />
                            </svg>
                        </svg>
                        <p className='font-bold text-lg antialiased text-black'>FoodieFinder</p>
                    </div>
                    {/* <form action="" onSubmit={(e) => submit(e)} method='get' className="relative">
                        <input type="search" required name='search' onChange={(e) => setSearch(e.target.value)} className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-black border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4 " />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar