import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fetchUserAttributes } from '@aws-amplify/auth';
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'YOUR_AUTH_TOKEN_HERE';

  return new Observable<HttpEvent<any>>(observer => {
    fetchUserAttributes().then((attributes) => {
      const email: string = attributes && attributes.email ? attributes.email : '';
      // Clone the request and add the authorization header
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
          'X-User-Email': email
        }
      });

      // Pass the cloned request with the updated header to the next handler
      next(authReq).subscribe({
        next: (event) => observer.next(event),
        error: (err) => observer.error(err),
        complete: () => observer.complete()
      });
    }).catch((err) => {
      observer.error(err);
    });
  });
};

@Injectable()
export class LoggingInterceptorDI implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    return next.handle(req);
  }
}