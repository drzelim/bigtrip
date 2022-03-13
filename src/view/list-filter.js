import { getFilteredPoints } from '../utils/common.js';
import { FilterType } from '../utils/const.js';
import Smart from './smart.js';

const createFilter = (points, type) => (
  `<form class="trip-filters" action="#" method="get" disabled>
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${type === FilterType.EVERYTHING ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-everything" data-name="everything">Everything<span> ${points.length}</span></label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future" ${type === FilterType.FUTURE ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-future" data-name="future">Future<span> ${getFilteredPoints(FilterType.FUTURE, points).length}</span></label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" ${type === FilterType.PAST ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-past" data-name="past">Past<span> ${getFilteredPoints(FilterType.PAST, points).length}</span></label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class Filter extends Smart {
  constructor(pointsModel, filterModel) {
    super();

    this._filterModel = filterModel;
    this._pointsModel = pointsModel;
    this._points = [];

    this._activeFilterType = FilterType.EVERYTHING;

    this._changeFilterHandler = this._changeFilterHandler.bind(this);
  }

  getTemplate() {
    this._activeFilterType = this._filterModel.getFilter();
    this._points = this._pointsModel.getPoints();
    return createFilter(this._points, this._activeFilterType);
  }

  _changeFilterHandler(evt) {
    evt.preventDefault();
    this._callback.filterHandler(evt);
  }

  setChangeFilterHandler(callback) {
    this._callback.filterHandler = callback;
    this.getElement().addEventListener('click', this._changeFilterHandler);
  }

  restoreHandlers() {
    this.setChangeFilterHandler(this._callback.filterHandler);
  }

  filterDisabled() {
    this.getElement().removeEventListener('click', this._changeFilterHandler);
    this.getElement().querySelectorAll('input').forEach((item) => item.setAttribute('disabled', true));
  }
}
