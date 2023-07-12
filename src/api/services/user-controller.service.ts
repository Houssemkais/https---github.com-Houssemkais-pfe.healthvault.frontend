/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Admin } from '../models/admin';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { Secretary } from '../models/secretary';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.FindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: number;
  },
  context?: HttpContext

): Observable<(User | Admin | Doctor | Patient | Secretary)> {

    return this.findById$Response(params,context).pipe(
      map((r: StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>) => r.body as (User | Admin | Doctor | Patient | Secretary))
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {
    id: number;
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.UpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {
    id: number;
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<(User | Admin | Doctor | Patient | Secretary)> {

    return this.update$Response(params,context).pipe(
      map((r: StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>) => r.body as (User | Admin | Doctor | Patient | Secretary))
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.DeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<(User | Admin | Doctor | Patient | Secretary)> {

    return this.create$Response(params,context).pipe(
      map((r: StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>) => r.body as (User | Admin | Doctor | Patient | Secretary))
    );
  }

  /**
   * Path part for operation findAll
   */
  static readonly FindAllPath = '/user/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<(User | Admin | Doctor | Patient | Secretary)>>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.FindAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<(User | Admin | Doctor | Patient | Secretary)>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: {
  },
  context?: HttpContext

): Observable<Array<(User | Admin | Doctor | Patient | Secretary)>> {

    return this.findAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<(User | Admin | Doctor | Patient | Secretary)>>) => r.body as Array<(User | Admin | Doctor | Patient | Secretary)>)
    );
  }

  /**
   * Path part for operation findByEmail
   */
  static readonly FindByEmailPath = '/user/email/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail$Response(params: {
    email: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>> {

    const rb = new RequestBuilder(this.rootUrl, UserControllerService.FindByEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByEmail(params: {
    email: string;
  },
  context?: HttpContext

): Observable<(User | Admin | Doctor | Patient | Secretary)> {

    return this.findByEmail$Response(params,context).pipe(
      map((r: StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>) => r.body as (User | Admin | Doctor | Patient | Secretary))
    );
  }

}
