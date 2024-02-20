import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const FindJob = () => {
    return (
        <div className='w-full bg-white px-8 py-7 rounded-[15px] border border-line'>
            <div>
                <Image src="/assets/images/job-search.png" alt='img' width={235} height={170} />
            </div>
            <div>
                <h4 className='text-base font-semibold text-title text-center'>
                    Your career belongs to you
                </h4>
                <p className='text-sm font-medium text-body_text text-center'>
                    Fast-track your way to a better, more fulfilling job.
                </p>
                <button className='text-base font-semibold text-center text-primary bg-transparent hover:bg-primary hover:text-white flex items-center justify-center gap-3 mt-6 w-full border-2 border-primary/50 py-2 px-4 rounded-3xl'>
                    Find Your Fit <FaArrowRightLong />
                </button>
            </div>
        </div>
    )
}

export default FindJob