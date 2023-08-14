import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../store/app.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-advice',
  standalone: true,
  styleUrls: ['./advice.component.css'],
  templateUrl: './advice.component.html',
})
export class AdviceComponent implements OnInit {
  advice$: Observable<string>;
  id$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.advice$ = this.store.select(fromRoot.selectAdviceAdvice);
    this.id$ = this.store.select(fromRoot.selectAdviceId);
  }
}
