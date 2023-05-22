import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';

import * as AdviceActions from './advice.actions';

@Injectable()
export class AdviceEffects {
  fetchSlip = createEffect(() => this.actions$);

  constructor(private actions$: Actions, private http: HttpClient) {}
}
