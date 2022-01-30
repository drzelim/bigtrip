import { createEditPoint } from "./view/edit-point.js";
import { createFilter } from "./view/list-filter.js";
import { createMenu } from "./view/menu.js";
import { createNewPoint } from "./view/new-point.js";
import { createPoint, createPointsContainer } from "./view/points.js";
import { createSort } from "./view/sort.js";
import { createTripCost } from "./view/trip-cost.js";
import { createTripInfo } from "./view/trip-info.js";


const POINT_COUNT = 3;
const pageBody = document.querySelector(`.page-body`);


const render = (container, element, position = `beforeend`) => {
  container.insertAdjacentHTML(position, element);
};

const tripMainContainer = pageBody.querySelector('.trip-main');
render(tripMainContainer, createTripInfo(), 'afterbegin');

const tripCostContainer = tripMainContainer.querySelector('.trip-info');
render(tripCostContainer, createTripCost());

const navContainer = pageBody.querySelector(`.trip-controls__navigation`);
render(navContainer, createMenu());

const filterContainer = pageBody.querySelector(`.trip-controls__filters`);
render(filterContainer, createFilter());

const pointsContainer = pageBody.querySelector(`.trip-events`);
render(pointsContainer, createSort());

render(pointsContainer, createPointsContainer());

const listPoint = pageBody.querySelector('.trip-events__list');
render(listPoint, createEditPoint())
render(listPoint, createNewPoint());

for(let i = 0; i < POINT_COUNT; i++) {
  render(listPoint, createPoint());
}





