import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-800 px-4 py-4'>
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className='text-2xl font-bold text-white'>Ganpat UNiversity</div>
                    <div className='flex gap-6'>
                        <NavLink
                            to="/" className={({ isActive }) => isActive ? "font-semibold text-blue-400" : "text-gray-300 hover:text-white"}>Home</NavLink>
                        <NavLink
                            to="/about" className={({ isActive }) => isActive ? "font-semibold text-blue-400" : "text-gray-300 hover:text-white"}>About</NavLink>
                        <NavLink
                            to="/constact" className={({ isActive }) => isActive ? "font-semibold text-blue-400" : "text-gray-300 hover:text-white"}>Contact</NavLink>
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar