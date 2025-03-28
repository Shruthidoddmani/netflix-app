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
export const { updateUserDetails } = UserSlice.actions; 
export default UserSlice.reducer;