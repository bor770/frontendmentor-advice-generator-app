import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AdviceActions from '../advice/store/advice.actions';

@Component({
  imports: [CommonModule],
  selector: 'app-dice',
  standalone: true,
  styleUrls: ['./dice.component.css'],
  templateUrl: './dice.component.html',
})
export class DiceComponent {
  defaultImgSrc = '../../assets/images/dice.svg';
  hoverImgSrc = '../../assets/images/dice-hover.svg';

  imgSrc = this.defaultImgSrc;

  constructor(private store: Store) {}

  onButtonClick() {
    this.store.dispatch(AdviceActions.fetchSlip());
  }

  onMouseEnter() {
    this.imgSrc = this.hoverImgSrc;
  }

  onMouseLeave() {
    this.imgSrc = this.defaultImgSrc;
  }
}
