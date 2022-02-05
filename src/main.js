import { getRandomPoints, offers } from './mock/random-point.js';
import {render, RenderPosition, replace } from './utils/render.js';
import EditPointView from './view/edit-point.js';
import Filter from './view/list-filter.js';
import SiteMenuView from './view/menu.js';
import PointListView from './view/point-list';
import PointView from './view/points.js';
import SortView from './view/sort.js';
import TripCostView from './view/trip-cost.js';
import TripInfoView from './view/trip-info.js';
import NoPoints from './view/no-points.js';


const POINT_COUNT = 20;
const pageBody = document.querySelector('.page-body');
const points = getRandomPoints(POINT_COUNT);
// console.log(points);

const renderPoints = (container, point, data) => {

  const pointComponent = new PointView(point, data);
  const editPointComponent = new EditPointView(point, data);

  const closeEditFormOnEsc = (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      replace(pointComponent, editPointComponent);
      document.removeEventListener('keydown', closeEditFormOnEsc);
    }
  };

  const replacePointToEdit = () => {
    replace(editPointComponent, pointComponent);
    document.addEventListener('keydown', closeEditFormOnEsc);
  };

  const replaceEditToPoint = () => {
    replace(pointComponent, editPointComponent, );
    document.removeEventListener('keydown', closeEditFormOnEsc);
  };

  const formSubmitHandler = () => {
    replace(pointComponent, editPointComponent);
    document.removeEventListener('keydown', closeEditFormOnEsc);
  };

  pointComponent.setPointClickHandler(replacePointToEdit);

  editPointComponent.setFormSubmitHandler(formSubmitHandler);
  editPointComponent.setFormCloseClickHandler(replaceEditToPoint);

  render(container, pointComponent);
};

const tripMainContainer = pageBody.querySelector('.trip-main');

const navContainer = pageBody.querySelector('.trip-controls__navigation');
render(navContainer, new SiteMenuView());

const filterContainer = pageBody.querySelector('.trip-controls__filters');
render(filterContainer, new Filter());

const pointsContainer = pageBody.querySelector('.trip-events');

if (points.length === 0) {
  render(pointsContainer, new NoPoints());
} else {
  const tripInfoComponent = new TripInfoView(points);
  render(tripMainContainer, tripInfoComponent, RenderPosition.AFTERBEGIN);

  const tripCostContainer = tripInfoComponent;
  const tripCostComponent = new TripCostView(points);
  render(tripCostContainer, tripCostComponent);

  render(pointsContainer, new SortView());

  const pointListComponent = new PointListView();
  render(pointsContainer, pointListComponent);

  points.forEach((point) => {
    renderPoints(pointListComponent, point, offers);
  });
}
