import dayjs from 'dayjs';

export const getOffers = (point, offers) => {
  const arr = [];
  point.offers.forEach((item) => {
    offers.forEach((offer) => {
      if (item === offer.id) {
        arr.push(offer);
      }
    });
  });
  return arr;
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
