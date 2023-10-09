import View from './View';
import icons from 'url:../../img/sprite.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _message = '';

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination__btn');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next', curPage);
    }
    //Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev', curPage);
    }
    //Other Page
    if (curPage < numPages) {
      return (
        this._generateMarkupButton('prev', curPage) +
        this._generateMarkupButton('next', curPage)
      );
    }

    //Page 1 no other pages
    return '';
  }

  _generateMarkupButton(type, curPage) {
    return `
        <button data-goto="${
          type === 'prev' ? curPage - 1 : curPage + 1
        }" class="pagination__btn pagination__${type}">
            <svg class="pagination__icon">
            <use href="${icons}#icon-arrow-${
      type === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
        </button>
    `;
  }
}

export default new PaginationView();
