import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.profileForm = this.fb.group({
      name:['',Validators.required],
      emailId:['',Validators.required],
      occupation:['',Validators.required],
      phoneNo:['',Validators.required]
    })
  }

  ngOnInit(): void {
    let userDetails:any = localStorage.getItem('userDetails') == null ? '[]' : localStorage.getItem('userDetails');
    this.profileForm.patchValue(JSON.parse(userDetails)['user']);
  }

}
