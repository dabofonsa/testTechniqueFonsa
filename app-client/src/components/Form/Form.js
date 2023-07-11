import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createProduct, updateProduct } from '../../actions/actionProducts.js';

const Form = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({
    _id: '',
    name: '',
    type: '',
    price: 0,
    rating: 0,
    warranty_years: 0,
    available: ''
  });

  const product = useSelector((state) => (currentId ? state.products.find((product) => product._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (product) setProductData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({
      _id: '',
      name: '',
      type: '',
      price: 0,
      rating: 0,
      warranty_years: 0,
      available: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProduct(productData));
      clear();
    } else {
      dispatch(updateProduct(currentId, productData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Modification du produit' : 'Création du produit'}</Typography>
        <TextField
          name="_id"
          variant="outlined"
          label="ID"
          fullWidth
          value={productData._id}
          onChange={(e) => setProductData({ ...productData, _id: e.target.value })}
        />
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={productData.name}
          onChange={(e) => setProductData({ ...productData, name: e.target.value })}
        />
        <TextField
          name="type"
          variant="outlined"
          label="Type"
          fullWidth
          value={productData.type}
          onChange={(e) => setProductData({ ...productData, type: e.target.value })}
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          value={productData.price}
          onChange={(e) => setProductData({ ...productData, price: e.target.value })}
        />
        <TextField
          name="rating"
          variant="outlined"
          label="Rating"
          fullWidth
          value={productData.rating}
          onChange={(e) => setProductData({ ...productData, rating: e.target.value })}
        />
        <TextField
          name="warranty_years"
          variant="outlined"
          label="Warranty Years"
          fullWidth
          value={productData.warranty_years}
          onChange={(e) => setProductData({ ...productData, warranty_years: e.target.value })}
        />
        <TextField
          name="available"
          variant="outlined"
          label="Available"
          fullWidth
          value={productData.available}
          onChange={(e) => setProductData({ ...productData, available: e.target.value })}
        />
      
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Ajouter
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Effacer
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
