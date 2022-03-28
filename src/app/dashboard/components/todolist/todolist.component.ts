import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddpopupComponent } from '../addpopup/addpopup.component';
import * as _ from 'underscore';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo = [{id:1,title:'Get to work',hourInPm:'10 PM',hourInAm:'10 AM'}, 
  {id:2,title:'Pick up groceries',hourInPm:'1 PM',hourInAm:'2 AM'}];
  inprogress=[{id:1,title:'Get to work',hourInPm:'10 PM',hourInAm:'10 AM'}, 
  {id:2,title:'Pick up groceries',hourInPm:'1 PM',hourInAm:'2 AM'} ];
  done = [{id:1,title:'Get to work',hourInPm:'10 PM',hourInAm:'10 AM'}, 
  {id:2,title:'Pick up groceries',hourInPm:'1 PM',hourInAm:'2 AM'}];
  todayDate=new Date();

  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    console.log(history.state);
    if(history.state && history.state['data']){
      console.log(history.state.data);
    }
    else{
      console.log({start:new Date(),end:new Date()})
    }
  }
  droptodo(event: CdkDragDrop<any[]>) {
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
  dropInprogress(event: CdkDragDrop<any[]>){
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
  dropDone(event: CdkDragDrop<any[]>){
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
  AddTodo(){
    const dialogRef = this.dialog.open(AddpopupComponent,{height: '550px',
    width: '600px'});
    dialogRef.afterClosed().subscribe(result=>{
      if(result)
      this.todo.push(result)
    })
  }
  editTodo(item:any){
    const dialogRef = this.dialog.open(AddpopupComponent,{
      data:item,
      height: '550px',
    width: '600px'});
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        let index = this.todo.findIndex(data=>data['id']==result['id']);
        this.todo.splice(index,1);
        this.todo.push(result);
      }
    })
  }
  deleteTodo(item:any){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:item,
      height:'200px',
      width:'400px'
    })
  }
}
