import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotficationService } from 'src/app/common/notfication.service';
import { UserDto } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordEmail:boolean=false;
  emailId:string="";
  password:string="";
  confirmPassword:string="";
  userData:any;
  constructor(private service :AuthService,
    private notificationService:NotficationService,
    private router:Router) { }

  ngOnInit(): void {
  }
  validateUser(){
    this.service.checkUser(this.emailId).subscribe(user=>{
      if(user && Object.keys(user).length>0){
        this.forgotPasswordEmail = true;
        this.userData = user;
      }
    },error=>{
      let errorMessage = error['error']['error'] || error['error']['errorMessage'];
      this.notificationService.failureMessage(errorMessage);
    })
    
  }
  forgotPassword(){
    let UserObj = {
      name:this.userData?.name,
      emailId:this.userData?.emailId,
      phoneNo:this.userData?.phoneNo,
      occupation:this.userData?.occupation,
      password:this.password
    }
    this.service.forgotPassword(UserObj).subscribe(user=>{
      if(user && Object.keys(user)){
        this.notificationService.successMessage('Password is successfully update !!');
        localStorage.clear();
        this.router.navigate(['login'])
      }
    },error=>{
      let errorMessage = error['error']['error'] || error['error']['errorMessage'];
      this.notificationService.failureMessage(errorMessage);
    })
  }
  navigate(url:string){
    localStorage.clear();
    this.router.navigate([url]);
  }

}
