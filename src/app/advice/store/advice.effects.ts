import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { APIResponse } from '../advice.model';
import * as AdviceActions from './advice.actions';

@Injectable()
export class AdviceEffects {
  fetchSlip = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit, AdviceActions.fetchSlip),
      switchMap(() =>
        this.http
          .get<APIResponse>(`https://api.adviceslip.com/advice`)
          .pipe(map((slip) => AdviceActions.setSlip(slip)))
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
