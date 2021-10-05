import './styles.scss'
// @ts-ignore
import view from 'bundle-text:./view.html'

declare global {
  interface Window {
    notify: Notify;
  }
}

export default class Notify {

  message: string;

  constructor( message: string) {
    this.message = message;

    this.initHtml();
  }

  asGlobalVariable() {
    window.notify = this;
  }

  initHtml() {
    const div = document.createElement('div');
    div.innerHTML = view
    document.body.appendChild(div)
  }

  async getRandomName() {
    const response = await fetch('https://random-data-api.com/api/name/random_name');
    const body = await response.json();
    
    return body.name ? body.name : "";
  }

  async click() {
    const element = document.getElementById('notification');
    const result = await this.getRandomName();
    element.innerHTML = "Bonjour " + result + " !";
    element.className = "show";

    setTimeout(function(){
      element.className = element.className.replace("show", "hidden");
      console.log('bye!')
    }, 3000);
    
  }
}