"use client"

import { getProductByCategory } from '@/app/_utils/api'
import React from 'react'
import Image from "next/image";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react";

interface Item  {
      id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image: string,
  available: boolean
}


interface MenuResponse {
  menuItems: Item[];
}

type Category = {category:string}

const ProductFilterByCat = ({category}:Category) => {
    const [items , setItems] = React.useState<Item[]>()

    React.useEffect(()=>{

        const getProduct = async ()=>{
            const filtered :MenuResponse = await getProductByCategory(category)
            setItems(filtered.menuItems)
        }

        getProduct()
    },[])

    console.log(items);
    
  return (
    <div className=' grid grid-cols-3 gap-12 px-12 '>
        {items?.map((product)=>{
         return (
    <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
      
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title + Availability */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {product.name}
          </h2>

          {product.available ? (
            <CheckCircle className="text-green-500" size={20} />
          ) : (
            <XCircle className="text-red-500" size={20} />
          )}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex justify-between items-center pt-3">
          <span className="text-lg font-semibold text-amber-600">
            ${product.price}
          </span>

          <button
            disabled={!product.available}
            onClick={() => onAddToCart?.(product)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
              ${
                product.available
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
        })}
    </div>
  )
}

export default ProductFilterByCat