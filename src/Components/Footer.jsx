import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-slate-200 bg-slate-950 text-slate-300'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8'>
        <div>
          <h2 className='text-2xl font-bold text-white'>
            <span className='font-serif text-rose-400'>Z</span>aptro
          </h2>
          <p className='mt-3 max-w-md text-sm leading-6 text-slate-400'>Modern essentials for everyday life, curated to make your home, routine, and style feel effortless.</p>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>Quick Links</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            <li><Link to='/' className='hover:text-white'>Home</Link></li>
            <li><Link to='/products' className='hover:text-white'>Products</Link></li>
            <li><Link to='/about' className='hover:text-white'>About</Link></li>
            <li><Link to='/contact' className='hover:text-white'>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-slate-400'>Stay Connected</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            <li><a href='mailto:hello@zaptro.com' className='hover:text-white'>hello@zaptro.com</a></li>
            <li><a href='tel:+1234567890' className='hover:text-white'>+1 (234) 567-890</a></li>
            <li><span>Mon - Sat, 9AM - 8PM</span></li>
          </ul>
        </div>
      </div>

      <div className='border-t border-slate-800 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8'>
        © 2026 Zaptro. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
