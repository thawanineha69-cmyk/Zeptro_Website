import React from 'react'
import { useContext,useEffect } from 'react'
import { DataContext } from '../Context/DataContext'

const Carousel = () => {
    const {data,fetchAllProducts} = useContext(DataContext)
    console.log(data);

    useEffect(() => {
        fetchAllProducts();
    }, []);

  return (
    <div>
      Carousel
    </div>
  )
}

export default Carousel
