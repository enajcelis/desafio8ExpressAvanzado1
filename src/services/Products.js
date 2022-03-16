export default class Products{
	constructor(){
		this.products = [];
	}
	getAllProducts = () => {
		return this.products;
	}
	saveProduct = (product) => {
		this.products.push(product);
	}
	getNextId = () => {
		let id = this.products.length + 1;
		return id;
	}
	getProductById = (id) => {
		let product = this.products.filter(obj => obj.id === parseInt(id));
		if(product.length == 0) return null;
		return product[0];
	}
}