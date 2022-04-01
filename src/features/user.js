import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    name: "",
    age: 0,
    email: ""
}

// Using a "slice" to create an initial state for the application
// exporting it to be picked up by the index.js
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    // reducer to set the login state equal to the user input which is the action payload
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    },
});

export const { login, logout } = userSlice.actions;

// Need to export the reducer itself as well
export default userSlice.reducer;