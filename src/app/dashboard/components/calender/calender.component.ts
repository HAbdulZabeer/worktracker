
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../../services/dashboard.service';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalenderComponent implements OnInit ,AfterViewInit{

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  constructor(public router: Router, private _snackBar: MatSnackBar, private dashboardService: DashboardService) { 
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.getCalendarData();
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true || events.length==0)
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
    this.viewDate = date;
  
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  getCalendarData(){
    let userDetails: any = localStorage.getItem('userDetails') == null ? '[]' : localStorage.getItem('userDetails');
    let userId = JSON.parse(userDetails)['user']['_id'];
    let listDate = this.viewDate;
    this.dashboardService.getCalendarDateData(userId, listDate.toISOString()).subscribe(calenderData => {
      this.events = [
        {
          start: startOfDay(new Date(new Date(calenderData[0].start).toUTCString())),
          end: endOfDay(new Date(new Date(calenderData[0].end).toUTCString())),
          title: calenderData[0].title +' '+ calenderData[0].totalCount,
          color: calenderData[0].color
        },
        {
          start: startOfDay(new Date(new Date(calenderData[1].start).toUTCString())),
          end: endOfDay(new Date(new Date(calenderData[1].end).toUTCString())),
          title: calenderData[0].title +' '+ calenderData[1].totalCount,
          color: calenderData[0].color
        },
        {
          start: startOfDay(new Date(new Date(calenderData[1].start).toUTCString())),
          end: endOfDay(new Date(new Date(calenderData[1].end).toUTCString())),
          title: calenderData[0].title +' '+ calenderData[2].totalCount,
          color: calenderData[0].color
        }];
    })
  }
  ngOnInit(): void {
  
  }

  handleEvent(action: string, event: CalendarEvent): void {
    let todayDate = this.viewDate;
    if (event.title == 'Hoilday') {
      this._snackBar.open("Enjoy Holiday ,You Can't add any task during hoilday !!!", 'close');
    } else {
      this.router.navigate(['dashboard/home/list', todayDate.toISOString()]);
    }
  }
  ngAfterViewInit(): void {
    this.getCalendarData();
  }
}
