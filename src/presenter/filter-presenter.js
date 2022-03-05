import { FilterType, UpdateType } from '../utils/const';
import { render } from '../utils/render';
import FilterView from '../view/list-filter.js';

export default class FilterPresenter {
  constructor(container, filterModel, pointsModel) {
    this._container = container;
    this._filterModel = filterModel;
    this._pointsModel = pointsModel;

    this._filteredPoints = [];

    this._activeFilter = FilterType.EVERYTHING;
    this._filterComponent = null;

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    if (this._filterComponent) {
      this._filterComponent.updateElement();
      return;
    }

    this._filterComponent = new FilterView(this._pointsModel, this._filterModel);
    render(this._container, this._filterComponent);
    this._handleViewAction();
  }

  _handleViewAction() {
    this._filterComponent.setChangeFilterHandler((evt) => {
      switch(evt.target.dataset.name) {
        case FilterType.FUTURE:
          if (this._filterModel.getFilter() === FilterType.FUTURE) {
            return;
          }
          this._filterModel.setFilter(UpdateType.MINOR, FilterType.FUTURE);
          break;
        case FilterType.PAST:
          if (this._filterModel.getFilter() === FilterType.PAST) {
            return;
          }
          this._filterModel.setFilter(UpdateType.MINOR, FilterType.PAST);
          break;
        case FilterType.EVERYTHING:
          if (this._filterModel.getFilter() === FilterType.EVERYTHING) {
            return;
          }
          this._filterModel.setFilter(UpdateType.MINOR, FilterType.EVERYTHING);
          break;
      }
    });
  }

  _handleModelEvent() {
    this._filterComponent.updateElement();
  }
}
