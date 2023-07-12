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
import { JwtRequestModel } from '../models/jwt-request-model';
import { JwtResponseModel } from '../models/jwt-response-model';
import { Patient } from '../models/patient';
import { Secretary } from '../models/secretary';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class JwtControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation create1
   */
  static readonly Create1Path = '/sign-in';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1$Response(params: {
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>> {

    const rb = new RequestBuilder(this.rootUrl, JwtControllerService.Create1Path, 'post');
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
   * To access the full response (for headers, for example), `create1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1(params: {
    body: (User | Admin | Doctor | Patient | Secretary)
  },
  context?: HttpContext

): Observable<(User | Admin | Doctor | Patient | Secretary)> {

    return this.create1$Response(params,context).pipe(
      map((r: StrictHttpResponse<(User | Admin | Doctor | Patient | Secretary)>) => r.body as (User | Admin | Doctor | Patient | Secretary))
    );
  }

  /**
   * Path part for operation createToken
   */
  static readonly CreateTokenPath = '/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken$Response(params: {
    body: JwtRequestModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<JwtResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, JwtControllerService.CreateTokenPath, 'post');
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
        return r as StrictHttpResponse<JwtResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken(params: {
    body: JwtRequestModel
  },
  context?: HttpContext

): Observable<JwtResponseModel> {

    return this.createToken$Response(params,context).pipe(
      map((r: StrictHttpResponse<JwtResponseModel>) => r.body as JwtResponseModel)
    );
  }

}
