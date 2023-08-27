import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/auth/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  id:string = "";
  password:string = "";

  constructor(
    private authService:AuthenticateService,
    private snackBar:MatSnackBar,
    private router:Router
  ){}

  login():void {
    //This part is only for simulation purpose. Gets last occurance of integer from the "id" string
    const matches = this.id.match(/\d+/g);
    const idStr = matches ? matches[matches.length - 1]: null
    if(idStr === null) {
      this.snackBar.open("Wrong Credentials", "Close", {
        duration: 3000,
        panelClass: ['custom-snackbar'],
        verticalPosition: 'bottom'
      })
      return
    }
    const idNum = Number(idStr)
    if(idNum <= 0 || 500 < idNum){
      this.snackBar.open("User doesn't exist", "Close", {
        duration: 3000,
        panelClass: ['custom-snackbar'],
        verticalPosition: 'bottom'
      })
      return
    }
    this.authService.login(idNum)
    this.router.navigateByUrl("/discovery")
  }


}
