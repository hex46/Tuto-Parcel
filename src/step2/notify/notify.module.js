import './styles.scss'
import view from './view.html'

export default class Notify {
  constructor(idElement, message) {
    this.element = document.getElementById(idElement);
    this.message = message;
    if (!this.element) throw 'Element non trouvé!';

    this.initHtml()
    this.element.onclick = this.click;
  }

  initHtml() {
    const div = document.createElement('div');
    div.innerHTML = view.replace('{message}', this.message);
    document.body.appendChild(div)
  }

  click() {
    const element = document.getElementById('notification');
    element.className = "show";

    setTimeout(function(){
      element.className = element.className.replace("show", "hidden");
      console.log('bye!')
    }, 3000);
  }

}