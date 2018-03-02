import { Observable } from 'rxjs/Rx';
import { Adal5Service } from './adal5.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
/**
 *
 *
 * @export
 * @class Adal5HTTPService
 */
export declare class Adal5HTTPService {
    private http;
    private service;
    /**
     *
     *
     * @static
     * @param {HttpClient} http
     * @param {Adal5Service} service
     *
     * @memberOf Adal5HTTPService
     */
    static factory(http: HttpClient, service: Adal5Service): Adal5HTTPService;
    /**
     * Creates an instance of Adal5HTTPService.
     * @param {HttpClient} http
     * @param {Adal5Service} service
     *
     * @memberOf Adal5HTTPService
     */
    constructor(http: HttpClient, service: Adal5Service);
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        responseType?: 'json' | 'text' | 'arraybuffer' | 'blob';
        withCredentials?: boolean;
    }): Observable<any>;
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
    private sendRequest(method, url, options);
    /**
     *
     *
     * @private
     * @param {*} error
     * @returns
     *
     * @memberOf Adal5HTTPService
     */
    private handleError(error);
}
