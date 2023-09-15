import { FC } from 'react'
import Burgir from "../assets/burgir.png"

const Header: FC<{}> = () => {
    return (
        <div className="hero w-full bg-rhino rounded-2xl mt-36">
            <div className="flex items-center justify-around flex-col lg:flex-row">
                <div className='w-2/4 text-white'>
                    <h1 className="text-5xl font-bold ">FOODIE FINDER</h1>
                    <p className="py-6 text-justify">is a global platform that caters to the culinary adventurers and food enthusiasts seeking authentic and diverse dining experiences around the world. Our mission is to connect food lovers with the best meals, hidden gems, and local delicacies in every corner of the globe.</p>
                </div>
                <img src={Burgir} className="w-1/4 rotate-12" />
            </div>
        </div>
    )
}

export default Header