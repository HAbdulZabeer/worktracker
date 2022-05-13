import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.scss']
})
export class DashboardlistComponent implements OnInit {
    name:String="";
  constructor(public router:Router) {

   }

  ngOnInit(): void {
    let userDetails:any = localStorage.getItem('userDetails') == null ? '[]' : localStorage.getItem('userDetails');
    this.name = JSON.parse(userDetails)['user'].name;
  }
  navigate(value:string){
    if(value=='dashboard/home/list')
    this.router.navigate([value],{state:{data:{event:{start:new Date(),end:new Date()}}}});
    else
    this.router.navigate([value]);
  }
}
