import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = localStorage.getItem('ACCESS_TOKEN');
        if(userToken !== null){
            const modifiedReq = req.clone({
                headers:req.headers.set('Authorization',userToken),
            })
            return next.handle(modifiedReq);
        }
        return next.handle(req);
        
    }
    
}
