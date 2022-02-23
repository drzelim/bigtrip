import {render, RenderPosition} from '../utils/render.js';
import TripCostView from '../view/trip-cost.js';
import TripInfoView from '../view/trip-info.js';
import SortView from '../view/sort.js';
import PointListView from '../view/point-list';
import NoPoints from '../view/no-points.js';
import PointPresenter from './point.js';
import { sortByTime, updateItem } from '../utils/common.js';
import { SORT_TYPE } from '../utils/const.js';
import NewPoint from '../view/new-point.js';
import { nanoid } from 'nanoid';


export default class Trip {
  constructor(pageBody, points, offers) {
    this._points = points;
    this._offers = offers;
    this._pageBody = pageBody;

    this._sortedPoints = this._points;
    this._sortType = SORT_TYPE.DAY;

    this._pointsContainer = null;

    this._pointListComponent = new PointListView();
    this._sortComponent = new SortView();
    this._noPoints = new NoPoints();

    this._renderingPointPresenters = {};

    this._tripInfoComponent = null;

    this._onFavoriteChange = this._onFavoriteChange.bind(this);
    this._onCloseAllEdit = this._onCloseAllEdit.bind(this);
    this._onSortPoints = this._onSortPoints.bind(this);
    this._addNewPointHandler = this._addNewPointHandler.bind(this);

    this._addNewPointHandler();
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
    this._sortedPoints.forEach((point) => {
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
    this._sortComponent.changeSortHandler(this._onSortPoints);
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

  _onSortPoints(sortType) {
    if (sortType === this._sortType) {
      return;
    }

    this._sortType = sortType;

    Object.values(this._renderingPointPresenters).
      forEach((presenter) => presenter.destroy());

    if (this._sortType === SORT_TYPE.PRICE) {
      this._sortedPoints = this._points.slice().sort((a, b) => b.basePrice - a.basePrice);
    }
    if (this._sortType === SORT_TYPE.TIME) {
      this._sortedPoints = this._points.slice().sort(sortByTime);
    }
    if (this._sortType === SORT_TYPE.DAY) {
      this._sortedPoints = this._points;
    }

    this._renderPoints();
  }

  _addNewPointHandler() {
    document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      const newPoint = {
        id: nanoid(10),
        basePrice: 0,
        type: '',
        city: '',
        offers: [],
        place: {
          description: [],
          photos: []
        },
        startTime: '',
        endTime: '',
        isFavorite: false,
      };
      const newPointComponent = new NewPoint(newPoint, this._offers);
      render(this._pointsContainer, newPointComponent, RenderPosition.AFTERBEGIN);
    });
  }
}
