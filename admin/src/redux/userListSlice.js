import { createSlice } from "@reduxjs/toolkit";

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    userList: [],
    isFetching: false,
    error: false
  },
  reducers: {
    getUserListStart: state => {
      state.isFetching = true;
    },
    getUserListSuccess: (state, action) => {
      state.isFetching = false;
      state.userList = action.payload;
    },
    getUserListFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserListStart: state => {
      state.isFetching = true;
    },
    updateUserListSuccess: (state, action) => {
      state.isFetching = false;
      state.userList[
        state.userList.findIndex(item => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserListFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    deleteUserListStart: state => {
      state.isFetching = true;
    },
    deleteUserListSuccess: (state, action) => {
      state.isFetching = false;
      state.userList.splice(
        state.userList.findIndex(item => item._id === action.payload),
        1
      );
    },
    deleteUserListFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    addUserListStart: state => {
      state.isFetching = true;
    },
    addUserListSuccess: (state, action) => {
      state.isFetching = false;
      state.userList.push(action.payload);
    },
    addUserListFailure: state => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  getUserListStart,
  getUserListSuccess,
  getUserListFailure,
  updateUserListStart,
  updateUserListSuccess,
  updateUserListFailure,
  deleteUserListStart,
  deleteUserListSuccess,
  deleteUserListFailure,
  addUserListStart,
  addUserListSuccess,
  addUserListFailure
} = userListSlice.actions;
export default userListSlice.reducer;
