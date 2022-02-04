import dayjs from 'dayjs';
import Abstract from './abstarct';

const cities = (points) => {
  const arr = points.map((point) => point.city);
  const cityList = Array.from(new Set(arr));
  return cityList;
};

const getStartAndDate = (points) => {
  const startTime = points.map((point) => point.startTime);
  const endTime = points.map((point) => point.endTime);
  startTime.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  endTime.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
  const startAndEndDate = [startTime[0], endTime[0]];

  return startAndEndDate.map((item) => {
    if (dayjs(startTime[0]).format('YYYY') !==  dayjs(endTime[0]).format('YYYY')) {
      return dayjs(item).format('DD MMM YY');
    }
    return dayjs(item).format('MMM DD');
  });
};


const createTripInfo = (points) => {
  const cityLits = cities(points);
  return (
    `<section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${cityLits.length <= 3 ? cityLits.join(' &mdash; ') : [cityLits[0], cityLits[cityLits.length - 1]].join(' &mdash;...&mdash; ')}</h1>

        <p class="trip-info__dates">${getStartAndDate(points).join('&nbsp;&mdash;&nbsp;')}</p>
      </div>
    </section>`
  );
};

export default class TripInfo extends Abstract {
  constructor (points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripInfo(this._points);
  }
}
