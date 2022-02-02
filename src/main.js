import { createEditPoint } from './view/edit-point.js';
import { createFilter } from './view/list-filter.js';
import { createMenu } from './view/menu.js';
import { createNewPoint } from './view/new-point.js';
import { createPoint, createPointsContainer } from './view/points.js';
import { createSort } from './view/sort.js';
import { createTripCost } from './view/trip-cost.js';
import { createTripInfo } from './view/trip-info.js';
import { getRandomPoints, offers } from './mock/random-point.js';


const POINT_COUNT = 20;
const pageBody = document.querySelector('.page-body');
const points = getRandomPoints(POINT_COUNT);
// console.log(points);

const render = (container, element, position = 'beforeend') => {
  container.insertAdjacentHTML(position, element);
};

const tripMainContainer = pageBody.querySelector('.trip-main');
render(tripMainContainer, createTripInfo(points), 'afterbegin');

const tripCostContainer = tripMainContainer.querySelector('.trip-info');
render(tripCostContainer, createTripCost(points));

const navContainer = pageBody.querySelector('.trip-controls__navigation');
render(navContainer, createMenu());

const filterContainer = pageBody.querySelector('.trip-controls__filters');
render(filterContainer, createFilter());

const pointsContainer = pageBody.querySelector('.trip-events');
render(pointsContainer, createSort());

render(pointsContainer, createPointsContainer());

const listPoint = pageBody.querySelector('.trip-events__list');
render(listPoint, createEditPoint(points[0], offers));
render(listPoint, createNewPoint());

points.forEach((point) => {
  render(listPoint, createPoint(point, offers));
});
