import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AuthInterceptor, LoggingInterceptorDI } from './services/authInterceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideHttpClient(withFetch(),
      withInterceptors([AuthInterceptor]),
      withInterceptorsFromDi() 
    ),
       provideCharts(withDefaultRegisterables()),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LoggingInterceptorDI,
        multi: true
      }
    ],
};
