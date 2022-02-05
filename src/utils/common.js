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
