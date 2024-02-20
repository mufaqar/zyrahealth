import React from 'react'
import IconBox from './icon-box';
import { FaQuestion, FaRegHeart, FaUnlockAlt } from 'react-icons/fa';
import { BsShield } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className='bg-white w-full mx-auto px-14'>
      <div className='w-full py-6 grid md:grid-cols-4 grid-cols-1 gap-7 border-b border-line'>
        <IconBox
          title="Drop a Line"
          icon={<FaQuestion />}
          content="Questions or feedback? We are all ears and ready to help!"
          link_txt="Start Convo"
          link="#"
        />
        <IconBox
          title="Support Hub"
          icon={<FaRegHeart />}
          content="Navigate your way through solutions, common queries, and FAQs."
          link_txt="Support Center"
          link="#"
        />
        <IconBox
          title="Rules of Engagement"
          icon={<BsShield />}
          content="Quick insights into our terms. Understand your rights and ours in a snap."
          link_txt="Terms of Use"
          link="#"
        />
        <IconBox
          title="Privacy First"
          icon={<FaUnlockAlt />}
          content="Dive into how we respect and protect your data. Your privacy matters!"
          link_txt="Privacy Policy"
          link="#"
        />
      </div>
      <div className='w-full py-6 flex md:flex-row flex-col items-center justify-between gap-3'>
        <p className='text-sm font-normal text-primary md:text-start text-center'>
          2023 © ZyraHealth
        </p>
        <p className='text-sm font-normal text-primary md:text-end text-center'>
          Made with love in Boston
        </p>
      </div>
    </footer>
  )
}

export default Footer