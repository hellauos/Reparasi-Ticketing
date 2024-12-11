import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  
  name: "auth",
  initialState: { 
    token: localStorage.getItem("accessToken") || null, 
    name : localStorage.getItem("username")||null,
    userId : localStorage.getItem("id")||null,
    role: JSON.parse(localStorage.getItem("roles")) || []},
  reducers: {
    
    setCredentials: (state, action) => {
      const { accessToken, infoUser:{username, roles, id}} = action.payload;
      console.log(action.payload)
      state.token = accessToken;
      state.name = username
      state.role = roles
      state.userId = id
      localStorage.setItem("accessToken",accessToken)
      localStorage.setItem("username",username)
      localStorage.setItem("id",id)
      localStorage.setItem("roles", JSON.stringify(roles));
    },
    logout: (state) => {
      state.token = null;
      state.name = null
      state.role = []
      state.userId = null

      localStorage.removeItem("accessToken");
      localStorage.removeItem("username");
      localStorage.removeItem("roles");
      localStorage.removeItem("id");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUsername = (state) => state.auth.name;
export const selectCurrentRoles = (state) => state.auth.role;
export const selectCurrentUserId = (state) => state.auth.userId;

