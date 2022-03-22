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
  hoursInAm=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM"];
  hoursInPm=["1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"];
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<AddpopupComponent>) {
    this.addTodoForm = this.fb.group({
      todoName:['',Validators.required],
      date:['',Validators.required],
      todoDescription:['',Validators.required],
      hourInAm:['',Validators.required],
      hourInPm:['',Validators.required]
    })
   }

  ngOnInit(): void {
    if(this.data){
      this.addTodoForm.patchValue({
        todoName:this.data['title'],
        date:this.data['date'],
        todoDescription:this.data['todoDescription'],
        hourInAm:this.data['hourInAm'],
        hourInPm:this.data['hourInPm']
      })
    }
  }
  AddTodo(){
    this.dialogRef.close({id:this.data ? this.data['id']:0,
    title:this.addTodoForm.value.todoName,
    date:this.addTodoForm.value.date,
    todoDescription:this.addTodoForm.value.todoDescription,
    hourInAm:this.addTodoForm.value.hourInAm,
    hourInPm:this.addTodoForm.value.hourInPm
  })
  }
}
