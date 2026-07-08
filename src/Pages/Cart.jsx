import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

const Cart = () => {
  const { cart, removeFromCart } = useContext(DataContext)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold text-slate-900'>Your cart</h1>
      <div className='mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='space-y-4'>
          {cart.length === 0 ? (
            <div className='rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600'>Your cart is empty. Start adding favorites from the shop.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className='flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center'>
                <img src={item.image} alt={item.name} className='h-24 w-24 rounded-2xl object-cover' />
                <div className='flex-1'>
                  <h2 className='font-semibold text-slate-900'>{item.name}</h2>
                  <p className='text-sm text-slate-500'>{item.category}</p>
                  <p className='mt-2 text-sm font-semibold text-rose-500'>Qty {item.quantity}</p>
                </div>
                <div className='flex items-center justify-between gap-4 sm:flex-col sm:items-end'>
                  <p className='text-lg font-bold text-slate-900'>${item.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)} className='text-sm font-semibold text-slate-500'>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className='rounded-3xl bg-slate-900 p-6 text-white'>
          <h2 className='text-xl font-semibold'>Order summary</h2>
          <div className='mt-6 space-y-3 text-sm text-slate-300'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className='flex justify-between border-t border-slate-700 pt-3 text-base font-semibold text-white'>
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button className='mt-8 w-full rounded-full bg-rose-500 px-4 py-3 font-semibold text-white'>Checkout</button>
        </aside>
      </div>
    </main>
  )
}

export default Cart
