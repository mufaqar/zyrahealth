import React from 'react'
import { NavLinks } from '@/const/navlinks'

const SideNav = ({ Cstm_class }: any) => {
    return (
        <div className={`w-full bg-white px-5 py-8 rounded-[15px] border border-line flex flex-col justify-between ${Cstm_class}`}>
            <ul className='flex flex-col gap-2.5'>
                {NavLinks?.slice(0, 5).map((item: any, idx: number) => {
                    return <li key={idx}>
                        <button className='text-base font-medium text-title bg-transparent hover:bg-primary hover:text-white flex items-center gap-1 w-full rounded-[15px] py-1.5'>
                            <span className='w-10 h-10 p-2.5 text-xl'>{item?.icon}</span> <span>{item?.title}</span>
                        </button>
                    </li>
                })}
            </ul>
            <ul className='flex flex-col gap-2.5'>
                {NavLinks?.slice(5, 7).map((item: any, idx: number) => {
                    return <li key={idx}>
                        <button className='text-base font-medium text-title bg-transparent hover:bg-primary hover:text-white flex items-center gap-1 w-full rounded-[15px] py-1.5'>
                            <span className='w-10 h-10 p-2.5 text-xl'>{item?.icon}</span> <span>{item?.title}</span>
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SideNav