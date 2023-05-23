import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import * as AdviceAction from '../advice/store/advice.actions';

@Component({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-dice',
  standalone: true,
  styleUrls: ['./dice.component.css'],
  templateUrl: './dice.component.html',
})
export class DiceComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      `dice`,
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/images/icon-dice.svg`
      )
    );
  }

  fetchNew() {
    this.store.dispatch(AdviceAction.fetchSlip());
  }
}
