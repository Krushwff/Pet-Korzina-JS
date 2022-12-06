function render(){

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);
productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

render();

//https://api.jsonserve.com/e8P0kT
fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		spinnerPage.handleClear();
		render();
	})
	.catch(error =>{
		console.log(error)
	});