import { createAction, props } from '@ngrx/store';

import { Slip } from '../advice.model';

export const fetchSlip = createAction(`[Advice] Fetch Slip`);

export const setSlip = createAction(
  `[Advice] Set Slip`,
  props<{ slip: Slip }>()
);
