import { useNavigate } from 'react-router-dom'
import React from 'react';

type Props = {
    location: string;
    className?: React.ReactNode;
    target: any;
}

const BackAction = ({ location, className,target }: Props) => {

    const navigate = useNavigate()
    const targets = target !== '' ? target : -1

    return (
        <div className={`${location === '/' ? 'hidden' : ''} ${className}`}>
            <button onClick={() => navigate(targets)} className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                <p>Back</p>
            </button>
        </div>
    )
}

export default BackAction