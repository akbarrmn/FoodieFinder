import { useNavigate } from 'react-router-dom'
import React from 'react';

type Props = {
    className?: React.ReactNode;
    target: any;
}

const BackAction = ( { className, target }: Props) => {

    const navigate = useNavigate()
    console.log(target)

    return (
        <div className={`${className}`}>
            <button onClick={() => navigate(target)} className="btn bg-black text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                <p>Back</p>
            </button>
        </div>
    )
}

export default BackAction