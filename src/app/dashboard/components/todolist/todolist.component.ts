import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddpopupComponent } from '../addpopup/addpopup.component';
import * as _ from 'underscore';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo = [{id:1,title:'Get to work'}, {id:2,title:'Pick up groceries'}, {id:3,title:'Go home'}, {id:4,title:'Fall asleep'}];
  inprogress=[{id:1,title:'Get up'},{id:2,title: 'Brush teeth'}, {id:3,title:'Take a shower'} ];
  done = [{id:1,title:'Get up'}];


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
    const dialogRef = this.dialog.open(AddpopupComponent);
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
      this.todo.push(result)
    })
  }
  editTodo(item:any){
    const dialogRef = this.dialog.open(AddpopupComponent,{data:item});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
      let index = this.todo.findIndex(data=>data['id']==result['id']);
      this.todo.splice(index,1);
      this.todo.push(result);
    })
  }
}
