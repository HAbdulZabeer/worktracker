import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.scss']
})
export class AddpopupComponent implements OnInit {
  addTodoForm:FormGroup;
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<AddpopupComponent>) {
    this.addTodoForm = this.fb.group({
      todoName:['',Validators.required]
    })
   }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data){
      this.addTodoForm.patchValue({
        todoName:this.data['title']
      })
    }
  }
  AddTodo(){
    this.dialogRef.close({id:this.data ? this.data['id']:0,title:this.addTodoForm.value.todoName})
  }
}
