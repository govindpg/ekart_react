import { createSlice } from "@reduxjs/toolkit";



const cartSli=createSlice({
       name:'cart',
       initialState:[],
       reducers:{

              //actions
              //fn to add items to cart
             //  addtoCart:(state,action)=>{
              addtoCart:(state,action)=>{
                     state.push(action.payload)
              },
              //fn to remove items from cart
              removefromcart:(state,action)=>{
                    return state.filter(item=>item.id!=action.payload)
              },
              //fn to remove every thing from cart
              removeallfromcart:(state)=>{
                    return state=[]
              }
       }
})


export const {addtoCart,removefromcart,removeallfromcart}=cartSli.actions
export default cartSli.reducer