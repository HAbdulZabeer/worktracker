import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public router: Router, public fb: FormBuilder,
    public authService: AuthService, private _snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  navigate(url:string){
    localStorage.clear();
    this.router.navigate([url]);
  }
  login() {
    
    this.authService.login(this.loginForm.value).subscribe((result: any) => {
      if (result) {
        if (result['token']) {
          localStorage.setItem('userDetails', JSON.stringify(result));
          this.router.navigate(['/dashboard']);
        }
        else {
          this.router.navigate(['/signup'])
        }
      }
    }, err => {
      let errorMessage = err['error']['error'] || err['error']['errorMessage'];
      this._snackBar.open(errorMessage, 'close');
    })
  }
}
