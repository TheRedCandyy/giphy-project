import * as model from './model.js';
import finderView from './views/finderView.js';
import randomView from './views/randomView.js';
import trendingView from './views/trendingView.js';
import paginationView from './views/paginationView.js';
import navigationView from './views/navigationView.js';

const randomElement = document.querySelector('.random-image');

const controlRandomImage = async function () {
  try {
    randomView.renderSpinner(randomElement);

    await model.loadRandomImage();

    randomView.render(model.state.randomImage);
  } catch (err) {
    console.log(err);
    randomView.renderError();
  }
};

const controlTrendingImages = async function () {
  try {
    trendingView.renderSpinner();

    await model.loadTrendingImages();

    trendingView.render(model.state.trending);
  } catch (err) {
    console.log(err);
    trendingView.renderError();
  }
};
const controlFinderImages = async function (query) {
  try {
    finderView.renderSpinner();

    await model.loadFinderImages(query);

    finderView.render(model.getSearchResultsPage());

    paginationView.render(model.state.finder);
  } catch (err) {
    console.log(err);
    finderView.renderError();
  }
};

const controlPagination = function (goToPage) {
  finderView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.finder);
};

const init = async function () {
  controlRandomImage();
  controlTrendingImages();
  randomView.addHandlerNextImage(controlRandomImage);
  finderView.addHandlerForm(controlFinderImages);
  paginationView.addHandlerClick(controlPagination);
};

init();
