import { getRandomPoints, offers } from './mock/random-point.js';
import TripPresenter from './presenter/trip.js';
import SiteMenuView from './view/menu.js';
import { render } from './utils/render.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filter-model.js';


const POINT_COUNT = 20;
const pageBody = document.querySelector('.page-body');
export const points = getRandomPoints(POINT_COUNT);

const pointsModel = new PointsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

pointsModel.setPoints(points);
offersModel.setOffers(offers);
console.log(points);

const navContainer = pageBody.querySelector('.trip-controls__navigation');
render(navContainer, new SiteMenuView());

const filterContainer = pageBody.querySelector('.trip-controls__filters');
const filterPresenter = new FilterPresenter(filterContainer, filterModel, pointsModel);
filterPresenter.init();

const tripPresenter = new TripPresenter(pageBody, pointsModel, offersModel, filterModel, filterPresenter);
tripPresenter.init();
