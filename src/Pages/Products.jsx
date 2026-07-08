import React, { useContext, useMemo, useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { categories } from '../data/products'

const Products = () => {
  const { data, loading, error, addToCart } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  const filteredProducts = useMemo(() => {
    let filtered = data

    if (activeCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [activeCategory, data, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-rose-500'>Shop</p>
          <h1 className='text-3xl font-bold text-slate-900'>Everything you need</h1>
        </div>
        <div className='flex flex-wrap gap-2'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentPage(1)
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${activeCategory === category ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <section className='mb-6 rounded-3xl bg-gradient-to-r from-rose-500 to-orange-400 p-5 text-white shadow-lg'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-rose-100'>Limited offer</p>
            <h2 className='text-2xl font-semibold'>Up to 30% off selected essentials</h2>
          </div>
          <div className='rounded-full bg-white/20 px-4 py-2 text-sm font-semibold'>Free shipping over $80</div>
        </div>
      </section>

      <div className='mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between'>
        <p className='text-sm text-slate-600'>{filteredProducts.length} products found</p>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value)
            setCurrentPage(1)
          }}
          className='rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700'
        >
          <option value='featured'>Featured</option>
          <option value='price-low'>Price: Low to High</option>
          <option value='price-high'>Price: High to Low</option>
          <option value='rating'>Top Rated</option>
        </select>
      </div>

      {loading && (
        <div className='rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-600'>Loading products from the API...</div>
      )}

      {!loading && error && (
        <div className='mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700'>{error}</div>
      )}

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {paginatedProducts.map((product) => (
          <article key={product.id} className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'>
            <div className='relative'>
              <img src={product.image} alt={product.name} className='h-56 w-full object-cover' />
              {product.originalPrice > product.price && (
                <span className='absolute left-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white'>Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
              )}
            </div>
            <div className='p-5'>
              <div className='flex items-center justify-between text-sm text-slate-500'>
                <span>{product.category}</span>
                <span>★ {product.rating}</span>
              </div>
              <h2 className='mt-2 text-xl font-semibold text-slate-900'>{product.name}</h2>
              <p className='mt-2 text-sm text-slate-600'>A refined pick designed for comfort and everyday convenience.</p>
              <div className='mt-4 flex items-center justify-between'>
                <div>
                  <p className='text-lg font-bold text-slate-900'>${product.price}</p>
                  <p className='text-sm text-slate-400 line-through'>${product.originalPrice}</p>
                </div>
                <button onClick={() => addToCart(product)} className='rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white'>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className='mt-8 flex flex-wrap justify-center gap-2'>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${currentPage === page ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </main>
  )
}

export default Products
