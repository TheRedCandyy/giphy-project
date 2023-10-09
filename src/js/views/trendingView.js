import View from './View';

class trendingView extends View {
  _parentElement = document.querySelector('.trending-images');
  _errorMessage = 'There was an error loading your images...';

  _generateMarkup() {
    let markup = ``;

    this._data.forEach(image => {
      markup =
        markup +
        `<img
        src="${image.imageDownsized.url}"
        alt="Trending Image"
        />
        `;
    });
    return markup;
  }
}

export default new trendingView();
