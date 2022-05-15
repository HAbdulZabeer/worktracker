import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.scss']
})
export class DashboardlistComponent implements OnInit {
  name: String = "";
  constructor(public router: Router) {}
  ngOnInit(): void {
    let userDetails: any = localStorage.getItem('userDetails') == null ? '[]' : localStorage.getItem('userDetails');
    this.name = JSON.parse(userDetails)['user'].name;
  }
  navigate(value: string) {
    let todayDate = new Date().toISOString();
    if (value == 'dashboard/home/list')
      this.router.navigate([value,todayDate]);
    else
      this.router.navigate([value]);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
  setColor():boolean{
  return  this.router.url.includes('/dashboard/home/list') ? true: false;
  }
}
