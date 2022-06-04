import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(public fb: FormBuilder, public router: Router,
    public authService: AuthService,
    private _snackbar: MatSnackBar) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      emailId: ['', Validators.required],
      phoneNo: ['', Validators.required],
      occupation: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  navigate(url:string){
    localStorage.clear();
    this.router.navigate([url]);
  }
  signUp() {
    this.authService.signIn(this.signUpForm.value).subscribe((result: any) => {
      if (result) {
        if (Object.keys(result).length > 0) {
          this._snackbar.open('Signup Successfully !!', 'close');
          this.router.navigate(['login']);
        }
      }
    }, err => {
      let errorMessage = err['error']['error'] || err['error']['errorMessage'];
      this._snackbar.open(errorMessage, 'close');
    })
  }
}
