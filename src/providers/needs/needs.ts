import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../api/api';

/*
  Generated class for the NeedsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NeedsProvider {

  constructor(public http: HttpClient, public api: API) {
    console.log('Hello NeedsProvider Provider');
  }

//  async getLocations(lat:number, lon:number){
//     let response = await this.api.post('getLocations', {lat: lat, lon: lon}).share()
//   }

}
