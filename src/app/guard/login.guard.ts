import {CanActivate} from '@angular/router';
import {log} from 'util';
/**
 * Created by admin on 2018/6/15.
 */
export class LoginGuard implements CanActivate {
canActivate() {
  const loggedIn: boolean = Math.random() < 0.5;
  if (!loggedIn) {
    console.log('用户未登录');
  }
  return loggedIn;
}
}
