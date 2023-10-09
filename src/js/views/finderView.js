import View from './View';

class finderView extends View {
  _inputForm = document.querySelector('.finder-form');
  _parentElement = document.querySelector('.finder-images');
  _errorMessage = 'There was an error loading your images...';

  addHandlerForm(handler) {
    this._inputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = e.target.children[0].value;
      if (!input) return;
      handler(input);
    });
  }

  _generateMarkup() {
    let markup = ``;

    this._data.forEach(image => {
      if (!image) return;
      markup =
        markup +
        `<a target="_blank" href="${image.imageDownsized.url}"><img
        src="${image.imageDownsized.url}"
        alt="Trending Image"
        /></a>
        `;
    });
    return markup;
  }
}

export default new finderView();
