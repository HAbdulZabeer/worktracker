import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
   userDetails:any = localStorage.getItem('userDetails') == null ? '[]' : localStorage.getItem('userDetails');
   userId = JSON.parse(this.userDetails)['user']['_id'];
  constructor(private fb:FormBuilder,private service:DashboardService) { 
    this.profileForm = this.fb.group({
      name:['',Validators.required],
      emailId:['',Validators.required],
      occupation:['',Validators.required],
      phoneNo:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.service.getProfile(this.userId).subscribe(profile=>{
      this.profileForm.patchValue(profile);
    })
  }
  updateUser(){
    this.service.update_profile(this.userId,this.profileForm.value).subscribe(profile=>{
      this.profileForm.patchValue(profile);
    })
  }

}
