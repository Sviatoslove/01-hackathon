import {Module} from '../core/module'
import { getRandomColor } from '../core/utils/background'

export class BackgroundModule extends Module {
 constructor(type, text) {
  super(type, text)
  this.container = document.querySelector('body')
 }

 trigger() {
  this.container.style.backgroundColor = getRandomColor()
 }
}