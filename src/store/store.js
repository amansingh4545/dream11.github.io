import { configureStore } from '@reduxjs/toolkit'
import myteamslice from './slice'

export default configureStore({
  reducer: {
    myteam : myteamslice,
  },
})