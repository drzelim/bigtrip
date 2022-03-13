import { getRandomPoints, offers } from './mock/random-point.js';
import FilterModel from './model/filter-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripPresenter from './presenter/trip.js';
import { MenuItem } from './utils/const.js';
import { remove, render } from './utils/render.js';
import SiteMenuView from './view/menu.js';
import Statistics from './view/statistics.js';


const POINT_COUNT = 20;
const pageBody = document.querySelector('.page-body');
export const points = getRandomPoints(POINT_COUNT);

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

pointsModel.setPoints(points);
offersModel.setOffers(offers);
// console.log(points);

const filterContainer = pageBody.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter(filterContainer, filterModel, pointsModel);
const tripPresenter = new TripPresenter(pageBody, pointsModel, offersModel, filterModel, filterPresenter);

const navContainer = pageBody.querySelector('.trip-controls__navigation');
const siteMenuComponent = new SiteMenuView();
let statisticsComponent = null;

const handleMenuChange = (menuItem) => {
  switch(menuItem) {
    case MenuItem.TABLE:
      tripPresenter.init();
      remove(statisticsComponent);
      siteMenuComponent.updateElement();
      break;
    case MenuItem.STATS:
      tripPresenter.destroy();
      statisticsComponent = new Statistics(pointsModel);
      render(pageBody, statisticsComponent);
      siteMenuComponent.updateElement();
      break;
  }
};

siteMenuComponent.setMenuChangeHandler(handleMenuChange);

render(navContainer, siteMenuComponent);

filterPresenter.init();
tripPresenter.init();
