import algoliasearch from 'algoliasearch';
import products from '../../data/products.json'



class ResultPage {
  constructor() {
    this._registerClient();
    this._startSearch();
  }

  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
	  '013fac21bd3c683820c94e454ea2376e' //calls different key
    );

  }
  _startSearch() {

	const index = this._searchClient.initIndex("products");
	for(const key in products){
		if(products[key].categories.includes("Cameras & Camcorders")){
			products[key].price =  Math.floor(products[key].price*100 *0.8)/100;
		}
	}
	
	index.saveObjects(products);
  }
}

export default ResultPage;
