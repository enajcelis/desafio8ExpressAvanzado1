import express from "express";
import Products from "./services/Products.js";

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productService = new Products();

app.get('/api/products', (req, res) => {
	let products = productService.getAllProducts();
	if (products.length == 0) return res.send({error: "No products loaded"});
	res.send(products);
});

app.get('/api/products/:id', (req, res) => {
	let {id} = req.params;
	let product = productService.getProductById(id);
	if (!product) return res.send({error: "Product not found"});
	res.send(product);
});

app.post('/api/products', (req, res) => {
	let {title,price,thumbnail} = req.body;
	let id = productService.getNextId();
	productService.saveProduct({id, title, price, thumbnail});
	res.send({message: "Product added"});
});