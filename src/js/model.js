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
  if (!data) return;

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

export const loadFinderImages = async function (query) {};

export const loadTrendingImages = async function () {
  try {
    const data = await AJAX(`${API_URL}trending?${API_KEY}`);

    data.data.forEach(image => state.trending.push(createImageObject(image)));
  } catch (err) {
    throw err;
  }
};

// const init = function () {};

// init();
