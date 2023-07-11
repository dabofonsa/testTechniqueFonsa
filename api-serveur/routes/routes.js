import express from 'express';

import { getProducts, getProduct, createProduct, updateProduct, likeProduct, deleteProduct } from '../controllers/product-controller.js';

const router = express.Router();

 router.get('/', getProducts);
 router.post('/', createProduct);
 router.get('/:id', getProduct);
 router.patch('/:id', updateProduct);
 router.delete('/:id', deleteProduct);
 router.patch('/:id/likeProduct', likeProduct);
 router.get('/',(req,res)=>{
    res.send('This works.')
})

export default router;

