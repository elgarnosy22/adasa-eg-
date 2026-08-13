import React, { useState } from 'react'
import photo from '../../assets/logo-GdqARQRt.png'
import { Link, NavLink } from 'react-router-dom';
import { blog } from 'fontawesome';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#161616] fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={photo}  className="h-12 me-3 " alt="Flowbite Logo" />
            <div>
              <span className="self-center text-xl text-white font-semibold whitespace-nowrap">عدسة</span>
              <p className='text-[0.8rem] hidden md:block text-orange-500'>عالم التصوير الفوتوغرافي</p>
            </div>
          </Link>

          <div className="flex md:order-2 items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-base hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>
            </button>
          </div>

          <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:flex-1 md:w-auto md:order-1 mt-4 md:mt-0`} id="navbar-sticky">
            <ul className="flex flex-col p-5 md:py-2 md:px-0 mt-4 font-medium border border-gray-500 rounded-4xl md:mx-auto bg-neutral-secondary-soft md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li className='mx-4 my-1 md:my-0'>
                <NavLink
                  to="/"
                  className={({ isActive }) => `block py-2 px-5 text-sm rounded-full transition-all duration-300 ${isActive ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  aria-current="page"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className='mx-4 my-1 md:my-0'>
                <NavLink
                  to="blog"
                  className={({ isActive }) => `block py-2 px-5 text-sm rounded-full transition-all duration-300 ${isActive ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  المدونة
                </NavLink>
              </li>
              <li className='mx-4 my-1 md:my-0'>
                <NavLink
                  to="about"
                  className={({ isActive }) => `block py-2 px-5 text-sm rounded-full transition-all duration-300 ${isActive ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  من نحن
                </NavLink>
              </li>
            </ul>

            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:justify-end">
              <div className='md:me-3 hidden md:block text-gray-600 hover:text-orange-500 text-md border-transparent border-2 hover:border-gray-500 p-2 rounded-xl transition-all duration-300 cursor-pointer'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <Link to='blog'>
                <button type="button" className="text-white bg-orange-500 w-full hover:-translate-y-1 transition-all duration-300 box-border border border-transparent  shadow-xs font-medium leading-5 rounded-4xl text-sm px-8 py-3 md:py-4 focus:outline-none">
                  ابدأ القراءة
                </button>
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  )
}