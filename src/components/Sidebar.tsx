"use client"
import React, { useState } from 'react'
import FindJob from './find-job'
import JobBox from './job-box'
import { Jobs } from '@/const/jobs'
import { FaArrowRightLong } from 'react-icons/fa6'

const Sidebar = ({ Cstm_class }: any) => {
    const [visibleJobs, setVisibleJobs] = useState(4); // Initially display 3 jobs
    const totalJobs = Jobs.length;

    const loadMoreJobs = () => {
        setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 1); // Incrementally show 3 more jobs
    };
    return (
        <div className={`${Cstm_class} w-full flex flex-col gap-5 sideBar  ${visibleJobs > 4 ? "h-[993px] overflow-y-scroll" : "h-full"}`}>
            <FindJob />
            <div>
                <h4 className='text-base font-semibold text-title mb-4'>
                    Featured Jobs
                </h4>
                <div className='flex flex-col gap-2'>
                    {Jobs.slice(0, visibleJobs).map((item: any, idx: number) => (
                        <JobBox key={idx} data={item} />
                    ))}
                </div>
                {visibleJobs < totalJobs && (
                    <button
                        className='text-base font-semibold text-center text-primary bg-transparent hover:bg-primary hover:text-white flex items-center justify-center gap-3 mt-6 w-full border-2 border-primary/50 py-2 px-4 rounded-3xl'
                        onClick={loadMoreJobs}
                    >
                        Show More <FaArrowRightLong />
                    </button>
                )}

            </div>
        </div>
    )
}

export default Sidebar