import React from 'react'

const About = () => {
  return (
    <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='grid gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[0.9fr_1.1fr] lg:p-12'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-rose-500'>Why Zaptro</p>
          <h1 className='mt-3 text-3xl font-bold text-slate-900'>A thoughtful shopping experience for everyday life.</h1>
        </div>
        <div className='space-y-4 text-lg text-slate-600'>
          <p>We bring together premium essentials, modern aesthetics, and everyday practicality in one place.</p>
          <p>From tech to home accents, every product is chosen to elevate routines without adding friction.</p>
          <p>Whether you are designing a fresh start or refreshing your favorite space, Zaptro makes it simple.</p>
        </div>
      </div>
    </main>
  )
}

export default About
