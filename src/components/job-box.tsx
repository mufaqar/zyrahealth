import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const JobBox = ({ data }: any) => {
    return (
        <div className='w-full bg-white px-3 py-4 rounded-[15px] border border-line flex gap-2'>
            <div className='border-2 border-line hover:border-primary p-2 rounded-full min-w-[57px] h-[57px]'>
                <Image src={data?.img} alt='feature' width={40} height={39} className='w-full h-full' />
            </div>
            <div>
                <Link href="#" className='text-base font-semibold text-title hover:text-primary inline-block'>
                    {data?.title}
                </Link>
                <Link href="#" className='text-sm font-semibold text-body_text hover:text-primary inline-block'>
                    {data?.categ}
                </Link>
                <p className='text-sm font-medium text-title my-3'>
                    {data?.excerpt}
                </p>
                <ul className='flex flex-wrap gap-1.5'>
                    <li className='text-sm font-normal text-primary bg-[#F3F5F8] py-1.5 px-2 rounded-[30px] w-fit'>
                        {data?.type}
                    </li>
                    <li className='text-sm font-normal text-primary bg-[#F3F5F8] py-1.5 px-2 rounded-[30px] w-fit'>
                        {data?.hours}
                    </li>
                    <li className='text-sm font-normal text-primary bg-[#F3F5F8] py-1.5 px-2 rounded-[30px] w-fit'>
                        {data?.salary}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default JobBox