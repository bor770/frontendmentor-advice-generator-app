import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AdviceEffects } from './advice/store/advice.effects';
import * as fromRoot from './store/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(AdviceEffects),
    provideHttpClient(),
    provideStore(fromRoot.appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
