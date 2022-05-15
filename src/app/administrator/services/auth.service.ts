import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDto, signIn, signInDto } from '../models/auth.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  
  constructor(public http:HttpClient) { super(); }

  login(loginObj:signIn):Observable<loginDto>{
    return this.http.post<loginDto>(`${this.apiUrl}/signin`,loginObj,this.httpOptions);
  }
  signIn(signUpObj:signInDto):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/signup`,signUpObj,this.httpOptions);
  } 
}
