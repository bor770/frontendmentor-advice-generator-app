import { createReducer, on } from '@ngrx/store';

import { Slip } from '../advice.model';
import * as AdviceActions from './advice.actions';

export type State = Slip;

const initalState: State = null;

export const reducer = createReducer(
  initalState,
  on(AdviceActions.setSlip, (state, { slip }) => ({ ...state, slip }))
);

export const selectAdvice = (state: State) => state.advice;
export const selectId = (state: State) => state.id;
