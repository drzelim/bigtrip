const totalPrice = (points) => points.reduce((acc, point) => (acc += point.basePrice), 0);

const createTripCost = (points) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice(points)}</span>
  </p>`
);

export {createTripCost};
