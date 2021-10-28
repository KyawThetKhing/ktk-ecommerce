import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure
} from "./productSlice";
import { publicRequest, userRequest } from "../requestMethods";
import {
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
} from "./userListSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//get products
export const getProducts = async dispatch => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

//delete product
export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
//update product
export const updateProduct = async (dispatch, id, product) => {
  dispatch(updateProductStart());
  try {
    // const res = await userRequest.put(`/products/${id}`, {product});
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

//delete product
export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};

//get userList
export const getUserList = async dispatch => {
  dispatch(getUserListStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserListSuccess(res.data));
  } catch (error) {
    dispatch(getUserListFailure());
  }
};

//delete userList
export const deleteUserList = async (dispatch, id) => {
  dispatch(deleteUserListStart());
  try {
    // const res = await userRequest.delete("/users" + id);
    dispatch(deleteUserListSuccess(id));
  } catch (error) {
    dispatch(deleteUserListFailure());
  }
};

//update userList
export const updateUserList = async (dispatch, id, user) => {
  dispatch(updateUserListStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserListSuccess(res.data));
  } catch (error) {
    dispatch(updateUserListFailure());
  }
};

//add userList
export const addUserList = async (dispatch, user) => {
  dispatch(addUserListStart());
  try {
    const res = await userRequest.post("/users", user);
    dispatch(addUserListSuccess(res.data));
  } catch (error) {
    dispatch(addUserListFailure());
  }
};
