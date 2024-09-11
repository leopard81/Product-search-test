import ResultsPage from './components/results-page';
import TestPage from './components/test-page';



class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
  }

  _initSearch() {
	  this.test = new TestPage();
    this.resultPage = new ResultsPage();

  }
}

const app = new SpencerAndWilliamsSearch();
