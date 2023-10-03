import View from './View';

class randomView extends View {
  _parentElement = document.querySelector('.random-image');
  _nextImageElement = document.querySelector('.random-image--btn');

  addHandlerNextImage(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.random-image--btn');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
        <div class="random-image">
          <img
            src="${this._data.imageDownsized.url}"
            alt="Random Image"
            width="250px"
            height="250px"
          />
          <button class="random-image--btn">Next Image</button>
        </div>
    `;
  }
}

export default new randomView();
