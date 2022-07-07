import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id:1,
    name:"Spider Man",
    price:1000,
    stock:10
  },
  {
    id:2,
    name:"Super Man",
    price:4000,
    stock:20
  },
  {
    id:3,
    name:"Batman",
    price:3800,
    stock:44
  },
  {
    id:4,
    name:"Wonder-Woman",
    price:2200,
    stock:29
  },
  {
    id:5,
    name:"Thor",
    price:3850,
    stock:26
  },
  {
    id:6,
    name:"Dc. Strange",
    price:4900,
    stock:11
  },
  {
    id:7,
    name:"Joker",
    price:1800,
    stock:67
  },
  {
    id:8,
    name:"Hulk",
    price:6000,
    stock:90
  },
  {
    id:9,
    name:"Flash",
    price:2300,
    stock:12
  },
  {
    id:10,
    name:"Iron Man",
    price:1270,
    stock:40
  },
  {
    id:11,
    name:"Captain America",
    price:3800,
    stock:45
  },
  {
    id:12,
    name:"Black WidowS",
    price:3800,
    stock:41
  },
 
]


export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    increment: (state,action) => {
    
      state.map((ele)=>
        ele.id === action.payload ? ele.stock +=1 : ele
      )
    },
    decrement: (state,action) => {
      state.map((ele)=>
      ele.id === action.payload ? ele.stock -= 1 : ele
      )
    },
   
    decrementByAmount: (state, action) => {
      state.value = state.value- action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount } = shoppingSlice.actions

export default shoppingSlice.reducer