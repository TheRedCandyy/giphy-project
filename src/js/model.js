import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY, API_KEY } from './config';
import { AJAX } from './helpers';

export const state = {
  randomImage: {},
  finder: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  trending: [],
};

export const createImageObject = function (data) {
  if (!data || Object.keys(data.images.downsized).length === 0) return;

  const imageData = data;

  return {
    id: imageData.id,
    url: imageData.url,
    imageOriginal: imageData.images.original,
    imageDownsized: imageData.images.downsized,
  };
};

export const loadRandomImage = async function () {
  try {
    const data = await AJAX(`${API_URL}random?${API_KEY}`);

    state.randomImage = createImageObject(data.data);
  } catch (err) {
    throw err;
  }
};

export const loadFinderImages = async function (query = 'bucks') {
  try {
    const data = await AJAX(`${API_URL}search?${API_KEY}&q=${query}`);

    if (data.data.length === 0) throw new Error('No results');

    state.finder.page = 1;

    state.finder.query = query;

    state.finder.results = [];

    data.data.forEach(image =>
      state.finder.results.push(createImageObject(image))
    );
  } catch (err) {
    throw err;
  }
};

export const loadTrendingImages = async function () {
  try {
    const data = await AJAX(`${API_URL}trending?${API_KEY}`);

    data.data.forEach(image => state.trending.push(createImageObject(image)));
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.finder.page) {
  state.finder.page = page;
  const start = (page - 1) * state.finder.resultsPerPage; //0;
  const end = page * state.finder.resultsPerPage; //9;

  return state.finder.results.slice(start, end);
};

// const init = function () {};

// init();
