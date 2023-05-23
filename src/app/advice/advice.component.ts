import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';

@Component({
  imports: [CommonModule],
  selector: 'app-advice',
  standalone: true,
  styleUrls: ['./advice.component.css'],
  templateUrl: './advice.component.html',
})
export class AdviceComponent {
  advice$ = this.store.select(fromApp.selectAdviceAdvice);
  id$ = this.store.select(fromApp.selectAdviceId);

  constructor(private store: Store) {}
}
