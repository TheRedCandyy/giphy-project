import * as model from './model.js';
import randomView from './views/randomView.js';
import trendingView from './views/trendingView.js';

const controlRandomImage = async function () {
  try {
    randomView.renderSpinner();

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

const init = async function () {
  controlRandomImage();
  controlTrendingImages();
  randomView.addHandlerNextImage(controlRandomImage);
};

init();
