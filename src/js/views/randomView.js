import View from './View';

class randomView extends View {
  _parentElement = document.querySelector('.random-image--container');
  _nextImageElement = document.querySelector('.random-image--btn');
  _errorMessage = 'There was an error loading your image...';

  addHandlerNextImage(handler) {
    this._nextImageElement.addEventListener('click', function (e) {
      handler();
    });
  }

  _generateMarkup() {
    return `
      <img
        src="${this._data.imageDownsized.url}"
        alt="Random Image"
        width="250px"
        height="250px"
      />
    `;
  }
}

export default new randomView();
