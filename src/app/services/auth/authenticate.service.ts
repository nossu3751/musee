import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { LoadingService } from '../ui/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  // loggedinUser: number | null = null;
  constructor(
    private router:Router,
    private loadingService:LoadingService
  ){

  }
  loggedInUser:number|null = null
  authenticate():boolean {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(this.loggedInUser == null) {
      this.loggedInUser = Number(loggedInUser)
    }
    console.log("LoggedIn!",this.loggedInUser)
    return loggedInUser !== null;
  }

  login(user: any) {
    localStorage.setItem("loggedInUser", user)
    this.loggedInUser = Number(user);
  }

  logout() {
    this.loadingService.showLoading()
    this.loggedInUser = null;
    localStorage.removeItem("loggedInUser")
    this.router.navigateByUrl("/")
  }



}

export const canActivateProtectedRoutes: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticateService);
  const router = inject(Router)
  const snackBar = inject(MatSnackBar)
  if (authService.authenticate()) {
    return true;
  } else {
    router.navigateByUrl("/login");
    snackBar.open("Please Log In First", "Close", {
      duration: 3000,
      panelClass: ['custom-snackbar'],
      verticalPosition: 'bottom'
    })
    return false;
  }
}