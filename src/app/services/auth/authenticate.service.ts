import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  // loggedinUser: number | null = null;
  loggedinUser: number | null = null;
  constructor(
   
  ) { }

  authenticate():boolean {
    return this.loggedinUser !== null;
  }

  login(user: any) {
    this.loggedinUser = user;
    
  }
  logout() {
    this.loggedinUser = null;
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