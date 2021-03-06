import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddpopupComponent } from '../addpopup/addpopup.component';
import * as _ from 'underscore';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DashboardService } from '../../services/dashboard.service';
import { listDto } from '../../models/list.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo: listDto[] = [];
  todayDate = new Date().toISOString();
  userDetails: any = localStorage.getItem('userDetails') == null ? '' : localStorage.getItem('userDetails');
  userId = JSON.parse(this.userDetails)['user']['_id'];
  inprogress: listDto[] = [];
  done: listDto[] = [];
  constructor(public dialog: MatDialog, private dashboardService: DashboardService,
    private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getTodods();
  }
  getTodods() {
    this.activeRoute.params.subscribe(value => {
      this.todayDate = value['listDate'];
    });
    this.dashboardService.getTodoList(this.userId, new Date(this.todayDate).toISOString())
      .subscribe(listTodo => {
        this.todo = listTodo.filter(el => el.listStatus == 1);
        this.inprogress = listTodo.filter(el => el.listStatus == 2);
        this.done = listTodo.filter(el => el.listStatus == 3);
      });
  }
  droptodo(event: CdkDragDrop<any[]>) {
    if(event.previousContainer.data[event.previousIndex]){
      event.previousContainer.data[event.previousIndex]['listStatus'] = 1;
      //add update api
      this.dashboardService.update_todo(this.userId, event.previousContainer.data[event.previousIndex]).subscribe(result=>{
        if(result)
        this.getTodods();
      })
    }
    console.log(event.previousContainer.data[event.previousIndex])
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  dropInprogress(event: CdkDragDrop<any[]>) {
    if(event.previousContainer.data[event.previousIndex]){
      event.previousContainer.data[event.previousIndex]['listStatus'] = 2;
      //add update api
      this.dashboardService.update_todo(this.userId, event.previousContainer.data[event.previousIndex]).subscribe(result=>{
        if(result)
        this.getTodods();
      })
    }
    console.log(event.previousContainer.data[event.previousIndex]) // get which got changed
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  dropDone(event: CdkDragDrop<any[]>) {
    if (event.previousContainer.data[event.previousIndex]) {
      event.previousContainer.data[event.previousIndex]['listStatus'] = 3;
     //add update api
     this.dashboardService.update_todo(this.userId, event.previousContainer.data[event.previousIndex]).subscribe(result=>{
      if(result)
      this.getTodods();
    })
    }
    console.log(event.previousContainer.data[event.previousIndex])
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }
  AddTodo() {
    const dialogRef = this.dialog.open(AddpopupComponent, {
      height: '550px',
      width: '600px',
      data:{date:this.todayDate}
    });
    dialogRef.afterClosed().subscribe(result => {
      let listDate = new Date(result.listDate).toISOString();
      if (result)
        this.dashboardService.addTodo(result, this.userId).subscribe(addTodoResult => {
          if (addTodoResult) {
            this.getTodods();
          }
        })
    })
  }
  editTodo(item: any) {
    const dialogRef = this.dialog.open(AddpopupComponent, {
      data: item,
      height: '550px',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dashboardService.update_todo(this.userId, result).subscribe(result=>{
          if(result)
          this.getTodods();
        })
      }
    })
  }
  deleteTodo(item: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:item,
      height:'200px',
      width:'400px'
    }).afterClosed().subscribe(confirm=>{
      if(confirm){
        this.dashboardService.delete_todo(this.userId, item._id).subscribe(result => {
          console.log(result);
          this.getTodods()
        })
      }
    })

  }
}
