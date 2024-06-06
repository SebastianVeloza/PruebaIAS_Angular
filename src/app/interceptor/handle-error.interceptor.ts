import { HttpInterceptorFn } from '@angular/common/http';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {

  let modified= req.clone({
    setHeaders:{
      'Content-type': 'application/json'
    
    }
  })
  return next(modified);
};
