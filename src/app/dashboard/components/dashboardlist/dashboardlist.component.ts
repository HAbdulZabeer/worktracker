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
    console.log(this.router)
    this.router.navigate([value]);
  }
}
