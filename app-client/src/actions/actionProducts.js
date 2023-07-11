import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/typeActions.js';

import * as api from '../api/index.js';


// action afficher les produits
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//action ajouter un produit
export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//action modifier un produit
export const updateProduct= (_id, produit) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(_id, produit);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//action liker un produit
export const likeProduct = (_id) => async (dispatch) => {
  try {
    const { data } = await api.likeProduct(_id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


//action supprmer produit
export const deleteProduct = (_id) => async (dispatch) => {
  try {
    await api.deleteProduct(_id);
    dispatch({ type: DELETE, payload: _id });
  } catch (error) {
    console.log(error.message);
  }
};