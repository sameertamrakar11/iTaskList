import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-2 flex justify-between  bg-slate-700 text-white'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 '>iTaskList</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-75 p-2'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75 p-2'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar
