import { createSlice } from "@reduxjs/toolkit";

export const countslice = createSlice({
    name:"count",
    initialState:{
        value:0
    },
    reducers:{
        increase :(state) => {
          state.value  +=1
        },
        increasebynum:(state,action) => {
          state.value +=action.payload
        },   
        reset:(state) => {
          state.value =0
        },   
        },
    
})

export const{increase,increasebynum,reset} = countslice.actions
export default countslice.reducer


