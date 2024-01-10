import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { fetchProducts } from '../../store/ProductSlices'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Main = ({ children }: { children: JSX.Element }) => {

    const { meals } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            <div className='h-full '>
                <header className='relative w-full h-full'>
                    <Navbar />
                    <div className='max-w-screen-xl mx-auto mt-[5%]'>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-col gap-6'>
                                    <h1 className='font-bold text-9xl'>Find your</h1>
                                    <h1 className='font-medium text-6xl'>favourite food</h1>
                                </div>
                                <p className='max-w-xl font-semibold text-xl text-[#ADADAD]'>culinary adventurers and food enthusiasts seeking authentic and diverse dining experiences around the world</p>
                                <div className='relative flex justify-center max-w-xl'>
                                    <div className='max-w-sm'>
                                        <Swiper
                                            slidesPerView={3}
                                            spaceBetween={30}
                                            navigation={{
                                                prevEl: prevRef.current,
                                                nextEl: nextRef.current,
                                            }}
                                            modules={[Navigation]}
                                            className="mySwiper"

                                        >
                                            {Object.keys(meals).length !== 0 && meals.map((data) =>
                                                <SwiperSlide>
                                                    <Link to={`/${data.strCategory}`} key={data.idCategory}>
                                                        <div className="bg-[#2A2A2A] rounded-full text-black w-full h-40 p-3 flex justify-center">
                                                            <div className='flex flex-col justify-center items-center gap-3'>
                                                                <div className='bg-white rounded-full w-16 h-20 p-1 flex flex-col justify-center'>
                                                                    <img src={data.strCategoryThumb} alt="Shoes" loading='lazy' className='rounded-full min-w-full object-cover' />
                                                                </div>
                                                                <div className="flex items-centertext-white">
                                                                    <h2 className='font-medium text-white text-sm'>{data.strCategory}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                    </div>
                                    <button className='btn absolute bg-[#2A2A2A] text-white hover:text-black left-0 my-auto top-0 bottom-0 rounded-full shadow-md' ref={prevRef}><BsArrowLeft /></button>
                                    <button className='btn absolute bg-[#2A2A2A] hover:text-black text-white right-0 my-auto top-0 bottom-0 rounded-full shadow-md' ref={nextRef}><BsArrowRight /></button>
                                </div>
                            </div>
                            <div className='relative w-full flex flex-col'>
                                <img
                                    src={'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                    alt="food"
                                    className='w-full h-full rounded-2xl object-cover brightness-50'
                                />
                                <h1 className='text-5xl font-bold absolute bottom-3 left-3 text-white font-serif'>Culinary Masterpiece!</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <Container>
                {children}
            </Container>

            <footer className='w-full bg-[#2A2A2A]'>
                <div className='max-w-screen-xl mx-auto '>
                    <div className='grid grid-cols-5 gap-10 py-6'>
                        <div className='flex flex-col col-span-2 gap-5 text-white'>
                            <h1>FoodieFinder</h1>
                            <p className='text-justify'>
                                Foodie Finder is a platform that caters to the culinary adventurers and food enthusiasts seeking authentic and diverse dining experiences around the world. My mission is to connect food lovers with the best meals, hidden gems, and local delicacies in every corner of the globe.
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 text-white'>
                            <h1>Usefull Link</h1>
                            <div className='flex flex-col gap-2'>
                                <a href="#" className='cursor-pointer'>Home</a>
                                <a href="#" className='cursor-pointer'>Menu</a>
                                <a href="#" className='cursor-pointer'>Service</a>
                                <a href="#" className='cursor-pointer'>Shop</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 text-white'>
                            <h1>Contact Me</h1>
                            <div className='flex flex-col gap-2'>
                                <a href="mailto:akbar.rahmana@gmail.com" target='_blank' className='cursor-pointer'>Email</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 text-white'>
                            <h1>About Me</h1>
                            <div className='flex flex-col gap-2'>
                                <a href="https://www.linkedin.com/in/akbar-rahmana/" target='_blank' className='cursor-pointer'>Linkedin</a>
                                <a href="https://github.com/akbarrmn" target='_blank' className='cursor-pointer'>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-black py-3'>
                    <h1 className='text-white font-medium text-center'>© 2023 Copyright: akbar rahmana</h1>
                </div>
            </footer>
        </>
    )
}

export default Main