import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJob25nMTIzIiwiYXV0aCI6IlJPTEVfTUVNQkVSIiwiZXhwIjoxNjg2MjgyNjc4fQ.tvIY0HXzpXYV_uFMl9p9azfOGDsMw8fmY7f6H5NmAp0"
const RefreshToken = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODY4ODU2Nzh9.mEdrjW2LV9GunpzuIEYhFbzWyosO5J95tkie_BbA3xk"

//초기값 설정
const initialState = {
  posts: [],
  info: {},
  isLoading: false,
  error: null
};

//닉네임 조회
export const getNickname = createAsyncThunk(
  "mypage/getNickname",
  async (payload, thunkAPI) => {
    try{
      const data = await axios.get('http://localhost:8080/member/mypage', 
      {
        headers:{
          Authorization: Authorization,
          RefreshToken: RefreshToken
        }
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch(e){
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//닉네임 변경
export const updateNickname = createAsyncThunk(
  "mypage/updateNickname",
  async (payload, thunkAPI) => {
    try{
      const data = await axios.put('http://localhost:8080/member/update/nickname', payload,
      {
        headers:{
          Authorization: Authorization,
          RefreshToken: RefreshToken
        }
      });
      console.log(data);
      window.alert(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch(e){
      return thunkAPI.rejectWithValue(e);
    }
  }
);

//비밀번호 변경
export const updatePassword = createAsyncThunk(
  "mypage/updatePassword",
  async (payload, thunkAPI) => {
    try{
      const data = await axios.put('http://localhost:8080/member/update/password', payload,
      {
        headers:{
          Authorization: Authorization,
          RefreshToken: RefreshToken
        }
      });
      console.log(data);
      if(data.data.success === false){
        window.alert(data.data.error.message);
      } else {
        window.alert(data.data.data);
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch(e){
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const mypageSlice = createSlice({
  name : "mypage",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
        .addCase(getNickname.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getNickname.fulfilled, (state,action) => {
          state.isLoading = false;
          state.info = action.payload;
        })
        .addCase(getNickname.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
    builder
        .addCase(updateNickname.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updateNickname.fulfilled, (state,action) => {
          state.isLoading = false;
          state.info = action.payload;
        })
        .addCase(updateNickname.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
    builder
        .addCase(updatePassword.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(updatePassword.fulfilled, (state,action) => {
          state.isLoading = false;
          state.info = action.payload;
        })
        .addCase(updatePassword.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  }
}); 

export default mypageSlice.reducer;