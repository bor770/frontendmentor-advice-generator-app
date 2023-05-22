import { createAction, props } from '@ngrx/store';

import { Slip } from '../advice.model';

export const setSlip = createAction(
  `[Advice] Set Slip`,
  props<{ slip: Slip }>()
);
