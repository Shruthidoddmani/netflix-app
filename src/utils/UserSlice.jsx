import { createSlice } from "@reduxjs/toolkit";

const UserSlice =  createSlice({
    name: "UserSlice",
    initialState: {
        userData:{},
    },
    reducers:{
        updateUserDetails : (state, action) => {
            state.userData = action.payload;
        }
    }

})
export const UserSliceActions = UserSlice.reducer; 
export default UserSlice;