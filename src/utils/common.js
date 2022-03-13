import dayjs from 'dayjs';
import { FilterType } from './const';

export const getOffers = (point, offers) => {
  const filterOffers = [];
  Object.keys(point.isType).forEach((key) => {
    if (point.isType[key]) {
      offers.forEach((offer) => {
        if (offer.type === key) {
          filterOffers.push(offer);
        }
      });
    }
  });
  return filterOffers;
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return;
  }

  return [].concat(items.slice(0, index), update, items.slice(index + 1));
};

export const sortByTime = (a, b) => {
  const aDuration = dayjs(a.endTime).diff(dayjs(a.startTime));
  const bDuration = dayjs(b.endTime).diff(dayjs(b.startTime));

  if (aDuration < bDuration) {
    return 1;
  }
  if (aDuration > bDuration) {
    return -1;
  }
  if (aDuration === bDuration) {
    return 0;
  }
};

export const getFilteredPoints = (filterType, points) => {
  switch(filterType) {
    case FilterType.FUTURE:
      return points.filter((point) => point.startTime >= new Date().toISOString());
    case FilterType.PAST:
      return points.filter((point) => point.endTime < new Date().toISOString());
  }
  return points;
};

const TimeDuration = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000
};

export const getEventDuration = (dateFrom, dateTo, data = 0) => {
  let date = data;
  if (dateFrom && dateTo) {
    const to = dayjs(dateTo);
    const from = dayjs(dateFrom);
    date = to.diff(from);
  }

  if (date < TimeDuration.HOUR) {
    return `${dayjs.duration(date).format('mm')}M`;
  } else if (date >= TimeDuration.HOUR && date < TimeDuration.DAY) {
    return `${dayjs.duration(date).format('HH')}H ${dayjs.duration(date).format('mm')}M`;
  } else if (date >=  TimeDuration.DAY && date < TimeDuration.MONTH) {
    return `${dayjs.duration(date).format('DD')}D ${dayjs.duration(date).format('HH')}H ${dayjs.duration(date).format('mm')}M`;
  } else if (date >= TimeDuration.MONTH) {
    return `${dayjs.duration(date).format('M')}M ${dayjs.duration(date).format('DD')}D ${dayjs.duration(date).format('HH')}H ${dayjs.duration(date).format('mm')}M`;
  }
};
