import { HttpHeaders } from '@angular/common/http';

export const BASE_API_URL = {
    baseDev: "https://opensky-network.org/api/",
    authUser: "user"
} 
export const ICAO_API_URL = {
    baseDev: "https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/airports/locations/doc7910",
    // authUser: "user"
} 

export const httpOptions = {
  method: 'GET',
      credentials: 'same-origin',
      redirect: 'follow',
      agent: null,
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('demo:demo'),
    })
  };
export const httpOptionsForICAO = {
  method: 'GET',
      credentials: 'same-origin',
      redirect: 'follow',
      agent: null,
    headers: new HttpHeaders({
      // 'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset',
      // 'Access-Control-Allow-Headers': '*',
      // 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    })
  };