import {
  HttpEvent,
  HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse,
  HttpSentEvent, HttpUserEvent
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Authservice} from "../auth/authservice";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private  authService: Authservice){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted: ',req);
    const copiedRequest = req.clone(
      {
        params: req.params.set('auth', this.authService.getToken())
      }
    );
    return next.handle(copiedRequest);
  }
}
