import { getRandomPoints, offers } from './mock/random-point.js';
import { render, RenderPosition } from './utils/render.js';
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
console.log(points);

const renderPoints = (container, point, data) => {

  const pointComponent = new PointView(point, data);
  const editPointComponent = new EditPointView(point, data);

  render(container, pointComponent.getElement());

  const openEditBtn = pointComponent.getElement().querySelector('.event__rollup-btn');
  const saveFormBtn = editPointComponent.getElement();
  const closeEditBtn = editPointComponent.getElement().querySelector('.event__rollup-btn');

  const closeEditFormOnEsc = (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      container.replaceChild(
        pointComponent.getElement(),
        editPointComponent.getElement()
      );
      document.removeEventListener('keydown', closeEditFormOnEsc);
    }
  };

  const replacePointComponent = () => {
    container.replaceChild( editPointComponent.getElement(), pointComponent.getElement());
    saveFormBtn.addEventListener('submit', (evt) => {
      evt.preventDefault();
      container.replaceChild(pointComponent.getElement(), editPointComponent.getElement());
      document.removeEventListener('keydown', closeEditFormOnEsc);
    });

    closeEditBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      container.replaceChild( pointComponent.getElement(), editPointComponent.getElement());
      document.removeEventListener('keydown', closeEditFormOnEsc);
    });

    document.addEventListener('keydown', closeEditFormOnEsc);
  };

  openEditBtn.addEventListener('click', replacePointComponent);
};

const tripMainContainer = pageBody.querySelector('.trip-main');

const navContainer = pageBody.querySelector('.trip-controls__navigation');
render(navContainer, new SiteMenuView().getElement());

const filterContainer = pageBody.querySelector('.trip-controls__filters');
render(filterContainer, new Filter().getElement());

const pointsContainer = pageBody.querySelector('.trip-events');

if (points.length === 0) {
  render(pointsContainer, new NoPoints().getElement());
} else {
  const tripInfoComponent = new TripInfoView(points);
  render(tripMainContainer, tripInfoComponent.getElement(), RenderPosition.AFTERBEGIN);

  const tripCostContainer = tripInfoComponent.getElement();
  const tripCostComponent = new TripCostView(points);
  render(tripCostContainer, tripCostComponent.getElement());

  render(pointsContainer, new SortView().getElement());

  const pointListComponent = new PointListView();
  render(pointsContainer, pointListComponent.getElement());

  points.forEach((point) => {
    renderPoints(pointListComponent.getElement(), point, offers);
  });
}
