import { getRandomInt, getRandomArrayElement } from './random-generator.js';
import { nanoid } from 'nanoid';

export const pointType = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Transport',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

export const cities = [
  'Moscow',
  'Sunja',
  'London',
  'New-York',
  'Amsterdam',
  'Paris',
  'Madrid'
];

export const offers = [
  {id: 1, text: 'Order Uber', price: 20, type: getRandomArrayElement(pointType)},
  {id: 2, text: 'Add luggage', price: 50, type: getRandomArrayElement(pointType)},
  {id: 3, text: 'Switch to comfort', price: 80, type: getRandomArrayElement(pointType)},
  {id: 4, text: 'Rent a car', price: 200, type: getRandomArrayElement(pointType)},
  {id: 5, text: 'Add breakfast', price: 50, type: getRandomArrayElement(pointType)},
  {id: 6, text: 'Lunch in city', price: 30, type: getRandomArrayElement(pointType)},
  {id: 7, text: 'Book tickets', price: 40, type: getRandomArrayElement(pointType)},
  // {id: 8, text: 'Order Uber', price: 20, type: getRandomArrayElement(pointType)},
  // {id: 9, text: 'Add luggage', price: 50, type: getRandomArrayElement(pointType)},
  // {id: 10, text: 'Switch to comfort', price: 80, type: getRandomArrayElement(pointType)},
  // {id: 11, text: 'Rent a car', price: 200, type: getRandomArrayElement(pointType)},
  // {id: 12, text: 'Add breakfast', price: 50, type: getRandomArrayElement(pointType)},
  // {id: 13, text: 'Lunch in city', price: 30, type: getRandomArrayElement(pointType)},
  // {id: 14, text: 'Book tickets', price: 40, type: getRandomArrayElement(pointType)},
];

export const descriptions = [
  {
    description: 'Moscow. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: 'Moscow',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },
  {
    description: 'Sunja. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Sunja',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },
  {
    description: 'London. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'London',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Cras aliquet varius'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },
  {
    description: 'New-York. Fusce tristique felis at fermentum pharetra.',
    name: 'New-York',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Fusce'
      }
    ]
  },
  {
    description: 'Amsterdam. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Amsterdam',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },
  {
    description: 'Paris. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Paris',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },

  {
    description: 'Madrid. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    name: 'Madrid',
    photo: [
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      },
      {
        src: `http://picsum.photos/248/152?r=${Math.random()}`,
        description: 'Lorem ipsum dolor'
      }
    ]
  },
];

const startTime = [
  '2022-02-02T17:36:32.554Z',
  '2021-12-29T11:44:32.554Z',
  '2022-01-04T01:01:32.554Z',
  '2022-01-10T22:24:32.554Z',
  '2022-03-12T22:20:32.554Z',
  '2022-03-04T22:20:32.554Z',
  '2021-11-30T17:36:32.554Z',
  '2021-07-30T17:36:32.554Z',
  '2022-03-14T14:20:32.554Z'
];

const endTime = [
  '2022-02-02T18:46:32.554Z',
  '2021-12-29T12:44:32.554Z',
  '2022-01-04T02:01:32.554Z',
  '2022-01-10T22:54:32.554Z',
  '2022-03-12T22:20:32.554Z',
  '2022-03-07T22:55:32.554Z',
  '2021-11-30T19:20:32.554Z',
  '2021-07-30T18:15:32.554Z',
  '2022-03-16T16:20:32.554Z'
];

export const getDestination = (city, desc) => desc.filter((item) => item.name === city);

export const getOffersId = (type) => offers.filter((offer) => type === offer.type).map((item) => item.id);

const getRandomPoint = () => {
  const randomIndex = getRandomInt(0, startTime.length - 1);
  const randomType = getRandomArrayElement(pointType);
  const randomCity = getRandomArrayElement(cities);
  const randomDescription = getDestination(randomCity, descriptions);
  return ({
    id: nanoid(10),
    basePrice: getRandomInt(5, 20) * 10,
    type: randomType,
    city: randomCity,
    offers: [getRandomArrayElement(offers)],
    place: {
      description: randomDescription.map((item) => item.description),
      photos: randomDescription.map((item) => item.photo).flat()
    },
    startTime: startTime[randomIndex],
    endTime: endTime[randomIndex],
    isFavorite: Math.random() > 0.5,
  });
};

export const getRandomPoints = ((amount) => {
  const points = [];
  for(let i = 0; i < amount; i++) {
    points.push(getRandomPoint());
  }
  return points;
});
