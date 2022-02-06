import {remove, render, replace } from '../utils/render.js';
import EditPointView from '../view/edit-point.js';
import PointView from '../view/points.js';

const Mode = {
  DEFAULT: 'default',
  EDITING: 'editing'
};

export default class Point {
  constructor(container, onFavoriteChange, onCloseAllEdit) {
    this._container = container;
    this._onFavoriteChange = onFavoriteChange;
    this._onCloseAllEdit = onCloseAllEdit;

    this._mode = Mode.DEFAULT;
    this._pointComponent = null;
    this._editPointComponent = null;

    this._replacePointToEdit = this._replacePointToEdit.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._replaceEditToPoint = this._replaceEditToPoint.bind(this);
    this._closeEditFormOnEsc = this._closeEditFormOnEsc.bind(this);
  }

  init(point, data) {
    this.point = point;
    this.data = data;

    const prevPointComponent = this._pointComponent;
    const prevEditPointComponent = this._editPointComponent;

    this._pointComponent = new PointView(this.point, this.data);
    this._editPointComponent = new EditPointView(this.point, this.data);

    this._setAllHandlers(this.point, this._pointComponent, this._editPointComponent);

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this._container, this._pointComponent);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  _setAllHandlers(point, pointComponent, editPointComponent) {
    pointComponent.setPointClickHandler(this._replacePointToEdit);

    editPointComponent.setFormSubmitHandler(this._formSubmitHandler);
    editPointComponent.setFormCloseClickHandler(this._replaceEditToPoint);

    pointComponent.setFavoriteChangeHandler(() => {
      this._onFavoriteChange(Object.assign({}, point, {
        isFavorite: !point.isFavorite
      }));
    });
  }

  _closeEditFormOnEsc(evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      replace(this._pointComponent, this._editPointComponent);
      document.removeEventListener('keydown', this._closeEditFormOnEsc);
      this._mode = Mode.DEFAULT;
    }
  }

  _replacePointToEdit() {
    this._onCloseAllEdit();
    replace(this._editPointComponent, this._pointComponent);
    document.addEventListener('keydown', this._closeEditFormOnEsc);
    this._mode = Mode.EDITING;
  }

  _replaceEditToPoint() {
    replace(this._pointComponent, this._editPointComponent);
    document.removeEventListener('keydown', this._closeEditFormOnEsc);
    this._mode = Mode.DEFAULT;
  }

  _formSubmitHandler() {
    replace(this._pointComponent, this._editPointComponent);
    document.removeEventListener('keydown', this._closeEditFormOnEsc);
    this._mode = Mode.DEFAULT;
  }

  resetEditDefault() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToPoint();
    }
  }
}
