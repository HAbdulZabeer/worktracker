import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/administrator/services/base.service';
import { DashboardDto } from '../models/dashboard.model';
import { listDto } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
  get_dashboard_data(userId: String): Observable<DashboardDto> {
    return this.http.get<DashboardDto>(`${this.apiUrl}/dashboardData/${userId}`, this.httpOptions);
  }
  addTodo(todoObj: listDto, userId: String): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addTodo/${userId}`, todoObj, this.httpOptions);
  }
  getTodoList(userId: String, listDate: String): Observable<listDto[]> {
    return this.http.get<listDto[]>(`${this.apiUrl}/listTodo/${userId}/${listDate}`, this.httpOptions);
  }
  getCalendarDateData(userId: String, listDate: Date): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getCalendar/${userId}/${listDate}`, this.httpOptions);
  }
  delete_todo(userId: String, id: String): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteTodo/${userId}/${id}`, this.httpOptions);
  }
  update_todo(userId:String,todoObj:listDto):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/updateTodo/${userId}`,todoObj,this.httpOptions);
  }
  getProfile(userId:String):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/profile/${userId}`,this.httpOptions);
  }
  update_profile(userId:String,updateUserObj:any){
    return this.http.put<any>(`${this.apiUrl}/updateUser/${userId}`,updateUserObj,this.httpOptions);
  }
}
