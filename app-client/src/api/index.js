import axios from 'axios';

const url = 'http://localhost:5000/products';

export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct) => axios.post(url, newProduct);
export const likeProduct = (_id) => axios.patch(`${url}/${_id}/likeProduct`);
export const updateProduct = (_id, updateProduct) => axios.patch(`${url}/${_id}`, updateProduct);
export const deleteProduct = (_id) => axios.delete(`${url}/${_id}`);

