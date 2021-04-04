import express from 'express';
import Product from '../models/products/product.js';
import Category from '../models/products/category.js';
import User from '../models/user.js';
const router = express.Router();

router.get('/products', (request, response) => {
	Product.find().then((products) => response.json(products));
});

router.get('/:category_id', (request, response) => {
	Product.find({ category: request.params.category_id }).then((products) =>
		response.json(products)
	);
});

router.get('/rise/categories', (request, response) => {
	Category.find().then((categories) => response.json(categories));
});

// just for debugging  !!! remove !!!

router.get('/rise/users', (request, response) => {
	User.find().then((users) => response.json(users));
});

export default router;
