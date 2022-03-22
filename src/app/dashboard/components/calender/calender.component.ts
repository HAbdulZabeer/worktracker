
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
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
export class CalenderComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'Number of Todos 50',
      color: colors.red
    },
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'Number of InProgress 50',
      color: colors.yellow
    },
    {
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      title: 'Number of Done 50',
      color: colors.blue
    },{
      start: startOfDay(new Date("2022,3,22")),
      end: endOfDay(new Date("2022,3,22")),
      title: 'Number of Todos 50',
      color: colors.red
    },
    {
      start: startOfDay(new Date("2022,3,22")),
      end: endOfDay(new Date("2022,3,22")),
      title: 'Number of InProgress 50',
      color: colors.yellow
    },
    {
      start: startOfDay(new Date("2022,3,22")),
      end: endOfDay(new Date("2022,3,22")),
      title: 'Number of Done 50',
      color: colors.blue
    },
    {
      start: startOfDay(new Date("2022,3,23")),
      end: endOfDay(new Date("2022,3,23")),
      title: 'Hoilday',
      color: colors.red
    },
    {
      start: startOfDay(new Date("2022,4,23")),
      end: endOfDay(new Date("2022,4,23")),
      title: 'Hoilday',
      color: colors.red
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(public router:Router,private _snackBar: MatSnackBar) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        
      }
      this.viewDate = date;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    console.log(this.viewDate)
  }
  ngOnInit(): void {
    console.log(this.viewDate)
  }
  handleEvent(action: string, event: CalendarEvent): void {
    if(event.title=='Hoilday'){
      this._snackBar.open("Enjoy Holiday ,You Can't add any task during hoilday !!!",'close');
    }else{
      this.router.navigate(['dashboard/home/list'],{state:{data:{start:event.start,end:event.end}}});
    }
} 
}
