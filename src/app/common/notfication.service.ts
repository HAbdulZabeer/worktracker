import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotficationService {

  constructor(public _snackbar:MatSnackBar) { }

  successMessage(message:string){
    this._snackbar.open(message,'close',{duration:1000});
  }

  failureMessage(message:string){
    this._snackbar.open(message,'close',{duration:2000});
  }
}
