import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice =createSlice({
       name:'wishlist',
       initialState:[],// to store more than one value
       reducers:{
              //actions
              // fn to add items to the state
              addtoWishlist:(state,action)=>{
                     state.push(action.payload)
              },
              //remove from wishlist
              removefromWishlist:(state,action)=>{

              //        //filter its returns a new array satisfying a condition
                  return   state.filter(item=>item.id!=action.payload)

              }
       }
})

export const{addtoWishlist,removefromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer