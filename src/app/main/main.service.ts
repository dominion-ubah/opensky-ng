import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from '../helpers/customConfig';
import { httpOptions } from '../helpers/customConfig';
@Injectable({
  providedIn: 'root'
})


export class MainService {

  
  states = [];
  constructor(
    private http: HttpClient
  ) { }

  getStates() {
    return this.http.get(`${BASE_API_URL.baseDev}states/all`, httpOptions)
  }


  getArrivalByAirport(endtime, icao) {
    let timeSt:any = new Date().setMinutes(new Date().getMinutes() - endtime),
     secondsSinceEpoch:any = Math.round(timeSt / 1000),
     dsecondsSinceEpoch:any = Math.round(Date.now() / 1000);
      return this.http.get(`${BASE_API_URL.baseDev}flights/arrival?airport=` + icao + '&begin=' + parseInt(secondsSinceEpoch) + '&end=' + parseInt(dsecondsSinceEpoch), httpOptions)
  }

  getDepartureByAirport(endtime, icao) {
    let timeSt:any = new Date().setMinutes(new Date().getMinutes() - endtime),
     secondsSinceEpoch:any = Math.round(timeSt / 1000),
     dsecondsSinceEpoch:any = Math.round(Date.now() / 1000);
     return this.http.get(`${BASE_API_URL.baseDev}flights/departure?airport=` + icao + '&begin=' + parseInt(secondsSinceEpoch) + '&end=' + parseInt(dsecondsSinceEpoch), httpOptions)
  }
  
  
  
  
  
  //   function getArrivalByAirport(endtime, icao) {
//     console.log("new stuffxx", timeSt, icao, Date.now())
//     // call `/users/authenticate` with requestOptions to authenticate the login process
//     // return fetch(`https://opensky-network.org/api/flights/arrival?airport=${icao}&begin=${timeSt}&end=${Date.now()}`, requestOptions)
    
//         .then(res => res.clone().json())
//         .then(data => {
//             console.log('json arrival', data)
//             // store user details and jwt token in local storage to keep user logged in between page refreshes

//             return data;
//         });
// }

}
