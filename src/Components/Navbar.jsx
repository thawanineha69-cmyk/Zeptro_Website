import { SignOutButton, UserButton } from '@clerk/react'
import { MapPinIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'

const Navbar = ({ location }) => {
  const { cart } = useContext(DataContext)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className='sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-4 sm:gap-7'>
          <Link to='/' className='text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl'>
            <span className='font-serif text-rose-500'>Z</span>aptro
          </Link>
          <div className='hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 md:flex'>
            <MapPinIcon className='h-4 w-4 text-rose-400' />
            <span className='font-medium'>
              {location ? `${location.suburb || location.city}, ${location.city}` : 'Add Location'}
            </span>
            <FaCaretDown className='text-slate-400' />
          </div>
        </div>

        <nav className='flex items-center gap-3 sm:gap-5'>
          <ul className='hidden items-center gap-5 text-sm font-semibold text-slate-700 md:flex'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-rose-500' : 'hover:text-rose-500')}>Home</NavLink>
            <NavLink to='/products' className={({ isActive }) => (isActive ? 'text-rose-500' : 'hover:text-rose-500')}>Products</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-rose-500' : 'hover:text-rose-500')}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-rose-500' : 'hover:text-rose-500')}>Contact</NavLink>
          </ul>
          <Link to='/cart' className='relative rounded-full bg-slate-100 p-2 text-slate-700'>
            <IoCartOutline className='h-6 w-6' />
            <span className='absolute -right-1 -top-1 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-semibold text-white'>
              {itemCount}
            </span>
          </Link>
          <div className='flex items-center gap-2'>
            <SignOutButton>
              <button className='rounded-full bg-rose-500 px-3 py-2 text-sm font-semibold text-white'>Sign In</button>
            </SignOutButton>
            <UserButton afterSignOutUrl='/' />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
