import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'

const Home = () => {
  const { data, addToCart } = useContext(DataContext)

  return (
    <main className='bg-slate-50'>
      <section className='mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16'>
        <div className='flex flex-col justify-center'>
          <span className='mb-4 w-fit rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-600'>Fresh picks for modern living</span>
          <h1 className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl'>Upgrade your space with style that feels effortless.</h1>
          <p className='mt-5 max-w-xl text-lg text-slate-600'>Discover curated essentials for work, travel, and everyday comfort—crafted to look as good as they feel.</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Link to='/products' className='rounded-full bg-slate-900 px-5 py-3 font-semibold text-white'>Shop Collection</Link>
            <Link to='/about' className='rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700'>Learn More</Link>
          </div>
        </div>

        <div className='overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 to-orange-400 p-6 shadow-2xl'>
          <img
            src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
            alt='Modern living room interior'
            className='h-[420px] w-full rounded-2xl object-cover'
          />
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8'>
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-rose-500'>Featured</p>
            <h2 className='text-2xl font-semibold text-slate-900'>Trending products</h2>
          </div>
          <Link to='/products' className='text-sm font-semibold text-rose-500'>See all</Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {data.slice(0, 4).map((product) => (
            <article key={product.id} className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'>
              <img src={product.image} alt={product.name} className='h-44 w-full rounded-xl object-cover' />
              <div className='mt-4 flex items-center justify-between text-sm text-slate-500'>
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h3 className='mt-2 font-semibold text-slate-900'>{product.name}</h3>
              <div className='mt-3 flex items-center justify-between'>
                <div>
                  <p className='text-lg font-bold text-slate-900'>${product.price}</p>
                  <p className='text-sm text-slate-400 line-through'>${product.originalPrice}</p>
                </div>
                <button onClick={() => addToCart(product)} className='rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white'>Add</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
