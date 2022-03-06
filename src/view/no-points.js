import { FilterType } from '../utils/const.js';
import AbstractView from './abstarct.js';

const getNoPointsMessage = (type) => {
  switch(type) {
    case FilterType.EVERYTHING:
      return 'Click New Event to create your first point';
    case FilterType.PAST:
      return 'There are no past events now';
    case FilterType.FUTURE:
      return 'There are no future events now';
  }
};

const createNoPoints = (type) => (`<p class="trip-events__msg">${getNoPointsMessage(type)}</p>`);

export default class NoPoints extends AbstractView {
  constructor(curentFilterType) {
    super();

    this._currentFilterType = curentFilterType;
  }

  getTemplate() {
    return createNoPoints(this._currentFilterType);
  }
}
