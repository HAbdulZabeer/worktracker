import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  apiUrl = 'http://localhost:3001/api';
  userDetails: any = localStorage.getItem('userDetails') == null ? '' : localStorage.getItem('userDetails');
  token = this.userDetails==''?'':JSON.parse(this.userDetails)['token'];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  constructor() { }
}
