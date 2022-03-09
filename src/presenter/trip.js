import {remove, render, RenderPosition} from '../utils/render.js';
import TripCostView from '../view/trip-cost.js';
import TripInfoView from '../view/trip-info.js';
import SortView from '../view/sort.js';
import PointListView from '../view/point-list';
import NoPoints from '../view/no-points.js';
import PointPresenter from './point.js';
import { getFilteredPoints, sortByTime } from '../utils/common.js';
import { SORT_TYPE, UpdateType, UserAction } from '../utils/const.js';
import NewPointPresenter from './new-point.js';


export default class Trip {
  constructor(pageBody, pointsModel, offersModel, filterModel, filterPresenter) {
    this._pointsModel = pointsModel;
    this._offersModel = offersModel;
    this._filterModel = filterModel;
    this._filterPresenter = filterPresenter;

    this._points = this._pointsModel.getPoints();
    this._offers = this._offersModel.getOffers();
    this._pageBody = pageBody;

    this._sortedPoints = [];
    this._sortType = SORT_TYPE.DAY;

    this._pointsContainer = null;
    this._pointPresenter = null;

    this._currentFilterType = null;

    this._pointListComponent = new PointListView();
    this._sortComponent = new SortView();
    this._noPoints = null;
    this._tripCostComponent = null;
    this._newPointPresenter = null;

    this._renderingPointPresenters = {};

    this._tripInfoComponent = null;

    this._onCloseAllEdit = this._onCloseAllEdit.bind(this);
    this._onSortPoints = this._onSortPoints.bind(this);
    this._onFilterPoints = this._onFilterPoints.bind(this);
    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._filterModel.addObserver(this._onFilterPoints);
    this._pointsModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._sortedPoints =  this._getPoints();
    if (this._pointsContainer === null) {
      this._pointsContainer = this._pageBody.querySelector('.trip-events');
    }
    if (this._points.length === 0) {
      this._renderNoPoints();
      return;
    }

    this._renderTripInfo();
    this._renderTripCost();
    this._renderSort();
    this._renderPointListConatiner();
    this._initNewPoint();
    this._renderPoints();
  }

  _getPoints() {
    this._currentFilterType = this._filterModel.getFilter();
    this._points = getFilteredPoints(this._currentFilterType, this._pointsModel.getPoints());

    switch(this._sortType) {
      case SORT_TYPE.PRICE:
        return this._points.slice().sort((a, b) => b.basePrice - a.basePrice);
      case SORT_TYPE.TIME:
        return this._points.slice().sort(sortByTime);
    }
    return this._points;
  }

  _getOffers() {
    return this._offersModel.getOffers();
  }

  _renderPoint(container, point, data) {
    this._pointPresenter = new PointPresenter (container, this._newPointPresenter, this._handleViewAction, this._onCloseAllEdit);
    this._pointPresenter.init(point, data);
    this._renderingPointPresenters[point.id] = this._pointPresenter;
  }

  _initNewPoint() {
    if (this._newPointPresenter) {
      return;
    }
    const newEventBtn = document.querySelector('.trip-main__event-add-btn');
    this._newPointPresenter = new NewPointPresenter(this._pointsContainer, this._offers, newEventBtn, this._sortComponent, this._handleViewAction);
    newEventBtn.addEventListener('click', () => {
      this._newPointPresenter.init();
      this._onSortPoints(SORT_TYPE.DAY);
      this. _onCloseAllEdit();
    });
  }

  _renderPoints() {
    this._sortedPoints.forEach((point) => {
      this._renderPoint(this._pointListComponent, point, this._offers);
    });
  }

  _renderNoPoints() {
    remove(this._sortComponent);
    this._noPoints = new NoPoints(this._currentFilterType);
    render(this._pointsContainer, this._noPoints);
  }

  _renderTripInfo() {
    const tripMainContainer = this._pageBody.querySelector('.trip-main');
    this._tripInfoComponent = new TripInfoView(this._points);
    render(tripMainContainer, this._tripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripCost() {
    if (this._tripCostComponent) {
      remove(this._tripCostComponent);
    }
    this._tripCostComponent = new TripCostView(this._sortedPoints);
    render(this._tripInfoComponent, this._tripCostComponent);
  }

  _renderSort() {
    this._sortComponent.changeSortHandler(this._onSortPoints);
    render(this._pointsContainer, this._sortComponent);
  }

  _renderPointListConatiner() {
    render(this._pointsContainer, this._pointListComponent);
  }

  _handleViewAction(actionType, updateType, update) {
    switch(actionType) {
      case UserAction.UPDATE_POINT:
        this._pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this._pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this._pointsModel.deletePoint(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._renderingPointPresenters[data.id].init(data, this._offers);
        break;
      case UpdateType.MINOR:
        this._clearTrip({filter: true});
        this.init();
        break;
      case UpdateType.MAJOR:
        this._clearTrip({filter: true});
        this.init();
        break;
    }
  }

  _clearTrip({filter = false} = {}) {
    remove(this._tripInfoComponent);
    remove(this._tripCostComponent);
    remove(this._noPoints);
    this._newPointPresenter.destroy();

    Object.values(this._renderingPointPresenters).
      forEach((presenter) => presenter.destroy());

    if(filter) {
      this._filterPresenter.init();
    }
  }

  _onCloseAllEdit() {
    Object.values(this._renderingPointPresenters).
      forEach((presenter) => presenter.resetEditDefault());
  }

  _onFilterPoints() {
    this._sortType = SORT_TYPE.DAY;

    this._clearTrip({filter: true});
    this.init();
  }

  _onSortPoints(sortType) {
    if (sortType === this._sortType) {
      return;
    }

    this._sortType = sortType;

    Object.values(this._renderingPointPresenters).
      forEach((presenter) => presenter.destroy());

    this._sortedPoints =  this._getPoints();

    this._renderPoints();
  }
}
