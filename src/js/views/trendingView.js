import View from './View';

class trendingView extends View {
  _parentElement = document.querySelector('.trending-images');

  _generateMarkup() {
    let markup = ``;

    this._data.forEach(image => {
      markup =
        markup +
        `<img
        src="${image.imageDownsized.url}"
        alt="Trending Image"
        width='250px'
        height='250px'
        />
        `;
    });
    return markup;
  }
}

export default new trendingView();
