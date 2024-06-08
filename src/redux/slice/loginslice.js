import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    isLogin: localStorage.getItem('isLogin') === 'true' ? true : false,
    username: 'Avip',
  },
  reducers: {
    login: (state) => {
      localStorage.setItem('isLogin', 'true');
      state.isLogin = true;
    },
    logout: (state) => {
      localStorage.setItem('isLogin', 'false');
      //   localStorage.removeItem('isLogin');
      state.isLogin = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;