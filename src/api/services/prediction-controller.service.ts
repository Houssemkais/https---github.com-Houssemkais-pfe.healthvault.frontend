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

import { PatientData } from '../models/patient-data';

@Injectable({
  providedIn: 'root',
})
export class PredictionControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation predictPatientData
   */
  static readonly PredictPatientDataPath = '/api/predict';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `predictPatientData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  predictPatientData$Response(params: {
    body: PatientData
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<number>>> {

    const rb = new RequestBuilder(this.rootUrl, PredictionControllerService.PredictPatientDataPath, 'post');
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
        return r as StrictHttpResponse<Array<number>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `predictPatientData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  predictPatientData(params: {
    body: PatientData
  },
  context?: HttpContext

): Observable<Array<number>> {

    return this.predictPatientData$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<number>>) => r.body as Array<number>)
    );
  }

}
