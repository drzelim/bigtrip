import {render, RenderPosition} from '../utils/render.js';
import TripCostView from '../view/trip-cost.js';
import TripInfoView from '../view/trip-info.js';
import SortView from '../view/sort.js';
import PointListView from '../view/point-list';
import NoPoints from '../view/no-points.js';
import PointPresenter from './point.js';
import { updateItem } from '../utils/common.js';

export default class Trip {
  constructor(pageBody, points, offers) {
    this._points = points;
    this._offers = offers;
    this._pageBody = pageBody;

    this._pointsContainer = null;

    this._pointListComponent = new PointListView();
    this._sortComponent = new SortView();
    this._noPoints = new NoPoints();

    this._renderingPointPresenters = {};

    this._tripInfoComponent = null;

    this._onFavoriteChange = this._onFavoriteChange.bind(this);
    this._onCloseAllEdit = this._onCloseAllEdit.bind(this);
  }

  init() {
    this._pointsContainer = this._pageBody.querySelector('.trip-events');
    if (this._points.length === 0) {
      this._renderNoPoints();
      return;
    }

    this._renderTripInfo();
    this._renderTripCost(this._tripInfoComponent);
    this._renderSort();
    this._renderPointListConatiner();
    this._renderPoints();
  }

  _renderPoint(container, point, data) {
    const pointPresenter = new PointPresenter (container, this._onFavoriteChange, this._onCloseAllEdit);
    pointPresenter.init(point, data);
    this._renderingPointPresenters[point.id] = pointPresenter;
  }

  _renderPoints() {
    this._points.forEach((point) => {
      this._renderPoint(this._pointListComponent, point, this._offers);
    });
  }

  _renderNoPoints() {
    render(this._pointsContainer, new NoPoints());
  }

  _renderTripInfo() {
    const tripMainContainer = this._pageBody.querySelector('.trip-main');
    this._tripInfoComponent = new TripInfoView(this._points);
    render(tripMainContainer, this._tripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripCost(component) {
    const tripCostComponent = new TripCostView(this._points);
    render(component, tripCostComponent);
  }

  _renderSort() {
    render(this._pointsContainer, this._sortComponent);
  }

  _renderPointListConatiner() {
    render(this._pointsContainer, this._pointListComponent);
  }

  _onFavoriteChange(newPoint) {
    this._points = updateItem(this._points, newPoint);
    this._renderingPointPresenters[newPoint.id].init(newPoint, this._offers);
  }

  _onCloseAllEdit() {
    Object.values(this._renderingPointPresenters).
      forEach((presenter) => presenter.resetEditDefault());
  }
}
