import { HttpHeaders } from '@angular/common/http';

export const BASE_API_URL = {
    baseDev: "https://opensky-network.org/api/",
    authUser: "user"
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