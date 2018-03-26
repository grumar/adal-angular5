import { Observable } from 'rxjs/Rx';
import { Adal5Service } from './adal5.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

/**
 *
 *
 * @export
 * @class Adal5HTTPService
 */
@Injectable()
export class Adal5HTTPService {

  /**
   *
   *
   * @static
   * @param {HttpClient} http
   * @param {Adal5Service} service
   *
   * @memberOf Adal5HTTPService
   */
  static factory(http: HttpClient, service: Adal5Service) {
    return new Adal5HTTPService(http, service);
  }

  /**
   * Creates an instance of Adal5HTTPService.
   * @param {HttpClient} http
   * @param {Adal5Service} service
   *
   * @memberOf Adal5HTTPService
   */
  constructor(
    private http: HttpClient,
    private service: Adal5Service
  ) { }

  /**
   *
   *
   * @param {string} url
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  get(url: string, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.sendRequest('get', url, options);
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} body
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  post(url: string, body: any, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    options.body = body;
    return this.sendRequest('post', url, options);
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  delete(url: string, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.sendRequest('delete', url, options);
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} body
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  patch(url: string, body: any, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    options.body = body;
    return this.sendRequest('patch', url, options);
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} body
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  put(url: string, body: any, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    options.body = body;
    return this.sendRequest('put', url, options);
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} [options]
   * @returns {Observable<any>}
   *
   * @memberOf Adal5HTTPService
   */
  head(url: string, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.sendRequest('head', url, options);
  }

  /**
   *
   *
   * @private
   * @param {string} method
   * @param {string} url
   * @param {RequestOptionsArgs} options
   * @returns {Observable<string>}
   *
   * @memberOf Adal5HTTPService
   */
  private sendRequest(method: string, url: string, options: {
    body?: any;
    headers?: HttpHeaders;
    reportProgress?: boolean;
    observe: 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
    withCredentials?: boolean;
  }): Observable<string> {

    const resource = this.service.GetResourceForEndpoint(url);
    let authenticatedCall: Observable<string>;
    if (resource) {
      if (this.service.userInfo.authenticated) {
        authenticatedCall = this.service.acquireToken(resource)
          .flatMap((token: string) => {
            if (options.headers == null) {
              options.headers = new HttpHeaders();
            }
            options.headers = options.headers.append('Authorization', 'Bearer ' + token);
            return this.http.request(method, url, options)
              .catch(this.handleError);
          });
      } else {
        authenticatedCall = Observable.throw(new Error('User Not Authenticated.'));
      }
    } else {
      authenticatedCall = this.http.request(method, url, options).catch(this.handleError);
    }

    return authenticatedCall;
  }

  /**
   *
   *
   * @private
   * @param {*} error
   * @returns
   *
   * @memberOf Adal5HTTPService
   */
  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    const errMsg = error.message || 'Server error';
    console.error(JSON.stringify(error)); // log to console instead

    return Observable.throw(error);
  }
}
