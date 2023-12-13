// In Redux Toolkit, a slice is a bundled package containing reducer logic and related actions for a 
// specific state section.


//ACTION+REDUCER
import { createSlice } from '@reduxjs/toolkit'

export const teamslice = createSlice({
  name: 'myteam',
  initialState: {
    players:[]
  },
  reducers: {
      addplayer : (state, action) =>{
        //agar sirf aisa rhega to bar bar ek hi dikhega
        // state.players = [action.payload];

        
        //action.payload yani waha ham data me 3 chiz dal k bheje the wahi isme jod do...bad me mapping kark
        //sare data ko dikhaye the

        //ye yani pahle jo hai + abhi wala
        state.players = [...state.players, action.payload];
        
        //ye yani kch nhi jud rha
        // state.players = [...state.players, ""];
      },
      // removeplayer : (state, action) =>{
      //     state.players.splice(action.payload , 1)
      // }
  }
})
export const { addplayer , removeplayer } = teamslice.actions
export default teamslice.reducer