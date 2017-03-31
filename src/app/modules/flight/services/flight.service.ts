import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightService {

  constructor(private http: Http) { }

  getFlights(): Observable<Response> {
    return this.http.get('http://localhost:5777/api/flight')
      .map(res => res.json());
  }

  // mapResponse(res: Response) {
  //   let body = res.json();
  //   console.log("body conversion of mapResponse:");
  //   console.log(body);

  //   return body;
  // }
}
