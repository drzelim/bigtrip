import { createElement } from '../utils/render.js';

export default class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can\'t instantiate Abstract, only cocrete one.');
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error('Abstarct nethod not implemented: getTemplate');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  show() {
    if (this.getElement().classList.contains('visually-hidden')) {
      this.getElement().classList.remove('visually-hidden');
    }
  }

  hide() {
    if (!this.getElement().classList.contains('visually-hidden')) {
      this.getElement().classList.add('visually-hidden');
    }
  }
}
