import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './shoppingSlice'

export function Shopping() {
  const count = useSelector((state) => state.shopping)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex justify-center">

      <h1 className='own text-center text-gray-600 text-4xl mt-8 hover:text-white inline-block'> Movie Store </h1>
      
      </div>
      
        <div className="parent flex justify-center flex-wrap ">

      {count.map((obj,i)=>{
     return   (
      <div key={i}>
<div className="owncard max-w-sm rounded overflow-hidden shadow-lg m-3 bg-gray-300 ">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Book Store</div>
    <p className="text-gray-700 text-base">
    Name : {obj.name}
    </p>
    <p className="text-gray-700 text-base">
    Price : {obj.price}
    </p>
    <p className="text-gray-700 text-base">
    Stock : {obj.stock}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button onClick={()=> dispatch(decrement(obj.id))} className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-white"> - stock</button>
    <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{obj.name}</span>
    <button onClick={() => dispatch(increment(obj.id))} className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-white">+ stock</button>
  </div>
  </div>
</div>
     )
      })}
      </div>

    </div>
  )
    }