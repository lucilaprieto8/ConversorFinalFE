import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const usuarioNotLoggedGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if(auth.token()){
    const router = inject(Router);
    router.navigate(['conversion']);
    return false;
  }
  return true;
};
