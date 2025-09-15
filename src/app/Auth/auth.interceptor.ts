import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// Functional-style interceptor introduced in Angular 15+
export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,
   next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

// debugger;
const token = typeof window !== 'undefined' ? localStorage.getItem('logData') : null;

  if (token) {
   req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};





