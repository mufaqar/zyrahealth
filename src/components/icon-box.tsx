import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const IconBox = ({ title, icon, content, link, link_txt }: any) => {
    return (
        <div className='max-w-[290px] mx-auto'>
            <span className='w-10 h-10 p-2.5 text-xl font-normal text-primary bg-transparent hover:text-white hover:bg-primary border-2 border-primary flex items-center justify-center rounded-full mx-auto'>
                {icon}
            </span>
            <h6 className='text-base font-semibold text-title text-center my-2.5'>
                {title}
            </h6>
            <p className='text-sm font-normal text-title text-center'>
                {content}
            </p>
            <Link href={link} className='text-base font-medium text-center text-primary flex items-center gap-2 hover:gap-5 mt-3 w-[146px] hover:w-[156px] mx-auto transform transition-all duration-300'>
                {link_txt} <FaArrowRightLong />
            </Link>
        </div>
    )
}

export default IconBox