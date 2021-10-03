export default class Notify {
  constructor(idElement, message) {
    this.element = document.getElementById(idElement);
    if (!this.element) throw 'Element non trouvé!';

    this.element.onclick = this.click(message);
  }

  click(message) {
    return function() {
      alert(message);
    }
  }
}