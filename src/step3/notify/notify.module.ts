import './styles.scss'
// @ts-ignore
import view from './view.html'

/**
 * Note : Parcel performs no type checking. You can use tsc --noEmit to have typescript check your files.
 * L'IDE peut le faire à la place de Parcel, à condition d'en utiliser un ou un éditeur de texte
 * (genre VSCode) avec les plugins TS
 * Possibilité d'utiliser des plugins (https://github.com/fathyb/parcel-plugin-typescript) mais pas MAJ depuis 2018
 * src: https://parceljs.org/typeScript.html
 */
export default class Notify {

  message: string;
  element: HTMLElement | null;

  // Pour tester l'absence de type checking
  //constructor(idElement: number, message: string)
  constructor(idElement: string, message: string) {
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
      element!.className = element!.className.replace("show", "hidden");
      console.log('bye!')
    }, 3000);
  }
}