import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-white shadow-3xl py-4 border-b-[0.5px] border-[#F2F2F2] rounded-b-md sticky top-0 z-50'>
      <div className='w-full mx-auto px-8 flex md:flex-row flex-col items-center justify-between gap-5'>
        <div className='md:w-1/2 w-full md:text-start text-center'>
          <Link href="/" className='inline-block'>
            <Image src="/assets/images/logo.png" alt='logo' width={141} height={23} />
          </Link>
        </div>
        <div className='md:w-1/2 w-full'>
          <ul className='flex md:gap-4 gap-2.5 items-center md:justify-end'>
            <li className='border border-icon hover:border-primary p-2 rounded-full'>
              <Image src="/assets/images/annotation.png" alt='annotation' width={21} height={21} />
            </li>
            <li className='border border-icon hover:border-primary p-2 rounded-full'>
              <Image src="/assets/images/message.png" alt='message' width={21} height={21} />
            </li>
            <li className='border border-icon hover:border-primary p-2 rounded-full'>
              <Image src="/assets/images/bell.png" alt='bell' width={21} height={21} />
            </li>
            <li className='flex items-center gap-1.5 text-title hover:text-primary'>
              <Image src="/assets/images/profile-pic.png" alt='profile-pic' width={38} height={37} />
              <span className='md:text-base text-sm font-medium '>
                James Bond
              </span>
              <FaChevronDown />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header