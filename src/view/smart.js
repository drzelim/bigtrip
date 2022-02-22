import Abstract from './abstarct';

export default class Smart extends Abstract {

  restoreHandlers() {
    throw new Error('Abstarct nethod not implemented: restoreHandlers');
  }

  updateData(update, flag) {
    if (!update) {
      return;
    }

    console.log(update)

    this._data = Object.assign({}, this._data, update);
    console.log(this._data)

    if (flag) {
      return;
    }
    this.updateElement();
  }

  updateElement() {
    const prevElement = this.getElement();
    const parent = prevElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }
}
