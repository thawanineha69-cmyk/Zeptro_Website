import { createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { products as fallbackProducts } from '../data/products'

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(fallbackProducts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cart, setCart] = useState([])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await axios.get('https://fakestoreapi.com/products')
      const apiProducts = response.data.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        originalPrice: Number((item.price * 1.2).toFixed(2)),
        category: item.category,
        rating: item.rating?.rate ?? 4.5,
        image: item.image,
        tag: item.category,
      }))
      setData(apiProducts)
    } catch (err) {
      setError('Unable to load products right now. Showing saved items instead.')
      setData(fallbackProducts)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const value = useMemo(
    () => ({ data, loading, error, cart, addToCart, removeFromCart }),
    [data, loading, error, cart]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

