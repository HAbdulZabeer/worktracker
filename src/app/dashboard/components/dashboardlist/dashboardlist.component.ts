import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.scss']
})
export class DashboardlistComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  navigate(value:string){
    if(value=='dashboard/home/list')
    this.router.navigate([value],{state:{data:{event:{start:new Date(),end:new Date()}}}});
    else
    this.router.navigate([value]);
  }
}
