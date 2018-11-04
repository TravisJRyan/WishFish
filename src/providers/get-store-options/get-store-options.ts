import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../api/api';

/*
  Generated class for the GetStoreOptionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetStoreOptionsProvider {

  constructor(public http: HttpClient, public api:API) {
    console.log('Hello GetStoreOptionsProvider Provider');
  }

  getStoreOptions(lat:number, lon:number, cb){
    console.log("getstoreopts", lat);
    let response = this.api.post('getLocations', {lat:lat, lon:lon}, {responseType: 'text'}).share();

    response.subscribe((res: any) => {
      // If the API returned a successful response
      console.log(res);
      cb(res);
    });

  }

  }

