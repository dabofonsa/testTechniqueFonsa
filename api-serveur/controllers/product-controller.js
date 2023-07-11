import express from 'express';
import mongoose from 'mongoose';

import ProductModel from '../models/ProductModel.js';

const router = express.Router();

// affiche tous les produits
export const getProducts = async (req, res) => { 
    try {
        const postProducts = await ProductModel.find();
                
        res.status(200).json(postProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//affiche un produit par son id
export const getProduct= async (req, res) => { 
    const { _id } = req.params;

    try {
        const prod = await ProductModel.findById(_id);
        
        res.status(200).json(prod);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Créer un produit
export const createProduct = async (req, res) => {
    const { _id, name, type, price, rating, warranty_years, available } = req.body;

    const newProductModel = new ProductModel({ _id, name, type, price, rating, warranty_years, available })

    try {
        await newProductModel.save();

        res.send({success: true, newProductModel: "produit ajouté avec succès"});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
// mettre a jour un produit
export const updateProduct = async (req, res) => {
    const { _id } = req.params;
    const { name, type, price, rating, warranty_years, available } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Pas de produit avec l'id: ${_id}`);

    const updatedProduct= { name, type, price, rating, warranty_years, available, _id: _id };

    await ProductModel.findByIdAndUpdate(_id, updatedProduct, { new: true });

    res.json(updatedProduct);
}

// Supprime un produit
export const deleteProduct = async (req, res) => {
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Pas de produit avec l'id: ${_id}`);

    await ProductModel.findByIdAndRemove(_id);

    res.json({ message: "Produit supprimé avec succès." });
}

// Like un produit
export const likeProduct = async (req, res) => {
    const { _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Pas de produit avec l'id: ${_id}`);
    
    const prod = await ProductModel.findById(_id);

    const updatedProduct = await ProductModel.findByIdAndUpdate(_id, { likeCount: prod.likeCount + 1 }, { new: true });
    
    res.json(updatedProduct);
}


export default router;