import { createReducer, on } from '@ngrx/store';

import { Slip } from '../advice.model';
import * as AdviceActions from './advice.actions';

export type State = Slip;

const initalState: State = { advice: null, id: null };

export const adviceReducer = createReducer(
  initalState,
  on(AdviceActions.setSlip, (state, { slip }): State => ({ ...state, ...slip }))
);

export const getAdvice = (state: State) => state.advice;
export const getId = (state: State) => state.id;
