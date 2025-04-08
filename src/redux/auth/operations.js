import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const setAuthHeader = (value) => {
//   axios.defaults.headers.common.Authorization = value;
// };

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    console.log("register", credentials);
    try {
      const response = await axios.post("/users/signup", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk("auth/logout", async () => {});

// reac14@mail.com
// react13@mail.com
// 123qweqwe
