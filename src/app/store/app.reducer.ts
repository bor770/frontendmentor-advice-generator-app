import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromAdvice from '../advice/store/advice.reducer';

interface AppState {
  advice: fromAdvice.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  advice: fromAdvice.adviceReducer,
};

const selectAdviceState = createFeatureSelector<fromAdvice.State>(`advice`);

export const selectAdviceAdvice = createSelector(
  selectAdviceState,
  fromAdvice.getAdvice
);
export const selectAdviceId = createSelector(
  selectAdviceState,
  fromAdvice.getId
);
