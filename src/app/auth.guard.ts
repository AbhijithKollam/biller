import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Define the auth guard function
export const authGuard: CanActivateFn = (route, state) => {
  const userName = localStorage.getItem('userName');

  if (userName) {
    return true; // User is authenticated
  } else {
    const router = inject(Router); // Inject the Router
    router.navigate(['register']); // Redirect to the register route
    return false; // User is not authenticated
  }
};
