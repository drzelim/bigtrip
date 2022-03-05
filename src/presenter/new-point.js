import {remove, render, RenderPosition} from '../utils/render.js';
import NewPoint from '../view/new-point.js';
import { nanoid } from 'nanoid';
import { UpdateType, UserAction } from '../utils/const.js';

export default class NewPointPresenter {

  constructor(container, offers, newEventBtn, sortComponent, onChangeData) {
    this._container = container;
    this._offers = offers;
    this._newEventBtn = newEventBtn;
    this._sortComponent = sortComponent;
    this._onChangeData = onChangeData;

    this._newPointComponent = null;

    this._closeNewFormOnEsc = this._closeNewFormOnEsc.bind(this);
    this._removeNewPointHandler = this._removeNewPointHandler.bind(this);
    this._submitNewPointFormHandler = this._submitNewPointFormHandler.bind(this);
  }

  init() {
    this._setNewEventBtnClickHandler();
  }

  _setNewEventBtnClickHandler() {
    const newPoint = {
      id: nanoid (10),
      basePrice: 0,
      type: '',
      city: '',
      offers: [],
      place: {
        description: [],
        photos: []
      },
      startTime: new Date(),
      endTime: new Date(),
    };

    this._newEventBtn.setAttribute('disabled', true);
    this._newPointComponent = new NewPoint(newPoint, this._offers);
    render(this._container, this._newPointComponent, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this._closeNewFormOnEsc);
    this._setAllHandlers();
    this._sortComponent.updateElement();
  }

  _setAllHandlers() {
    this._newPointComponent.setFormCloseClickHandler(this._removeNewPointHandler);
    this._newPointComponent.setFormSubmitHandler(this._submitNewPointFormHandler);
  }

  _closeNewFormOnEsc(evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      this.destroy();
      document.removeEventListener('keydown', this._closeNewFormOnEsc);
    }
    if(evt.key === 'Enter') {
      evt.preventDefault();
    }
  }

  destroy() {
    if (this._newPointComponent) {
      remove(this._newPointComponent);
      this._newPointComponent = null;
      this._newEventBtn.removeAttribute('disabled');
    }
  }

  _removeNewPointHandler() {
    this.destroy();
  }

  _submitNewPointFormHandler(point) {
    this._onChangeData(
      UserAction.ADD_POINT,
      UpdateType.MAJOR,
      point
    );
    this.destroy();
  }
}
