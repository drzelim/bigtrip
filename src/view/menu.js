import AbstractView from './abstarct';

const createMenu = () => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" data-name="table" href="#">Table</a>
    <a class="trip-tabs__btn" href="#" data-name="stats">Stats</a>
  </nav>`
);

export default class SiteMenu extends AbstractView {
  constructor() {
    super();

    this._menuChangeHadnler = this._menuChangeHadnler.bind(this);
  }

  getTemplate() {
    return createMenu();
  }

  _menuChangeHadnler(evt) {
    evt.preventDefault();
    this._callback.menuHandler(evt.target.dataset.name);
  }

  setMenuChangeHandler(callback) {
    this._callback.menuHandler = callback;
    this.getElement().addEventListener('click', this._menuChangeHadnler);
  }
}
