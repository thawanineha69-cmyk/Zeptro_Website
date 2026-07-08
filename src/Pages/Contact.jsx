import React from 'react'

const Contact = () => {
  return (
    <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
      <div className='rounded-3xl bg-slate-900 p-8 text-white shadow-xl lg:p-12'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-rose-400'>Contact</p>
        <h1 className='mt-3 text-3xl font-bold'>We would love to hear from you.</h1>
        <p className='mt-4 max-w-2xl text-lg text-slate-300'>Reach out for support, wholesale questions, or product recommendations.</p>
        <div className='mt-8 flex flex-wrap gap-4'>
          <a href='mailto:hello@zaptro.com' className='rounded-full bg-white px-5 py-3 font-semibold text-slate-900'>hello@zaptro.com</a>
          <a href='tel:+1234567890' className='rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200'>+1 (234) 567-890</a>
        </div>
      </div>
    </main>
  )
}

export default Contact
