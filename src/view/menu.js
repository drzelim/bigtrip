import { MenuItem } from '../utils/const';
import Smart from './smart';

const createMenu = (menuItem) => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  ${menuItem === MenuItem.TABLE ? 'trip-tabs__btn--active' : ''}" data-name="table" href="#">Table</a>
    <a class="trip-tabs__btn ${menuItem === MenuItem.STATS ? 'trip-tabs__btn--active' : ''}" href="#" data-name="stats">Stats</a>
  </nav>`
);

export default class SiteMenu extends Smart {
  constructor() {
    super();

    this._menuChangeHadnler = this._menuChangeHadnler.bind(this);
    this._currentMenuItem = MenuItem.TABLE;
  }

  getTemplate() {
    return createMenu(this._currentMenuItem);
  }

  _menuChangeHadnler(evt) {
    evt.preventDefault();
    this._currentMenuItem = evt.target.dataset.name;
    this._callback.menuHandler(evt.target.dataset.name);
  }

  setMenuChangeHandler(callback) {
    this._callback.menuHandler = callback;
    this.getElement().addEventListener('click', this._menuChangeHadnler);
  }

  restoreHandlers() {
    this.setMenuChangeHandler(this._callback.menuHandler);
  }
}
