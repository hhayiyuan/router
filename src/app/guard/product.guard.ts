import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../product/product.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
/**
 * Created by admin on 2018/6/19.
 */
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product| Observable<Product>|Promise<Product> {
    let productId: number = route.params['id'];
    if ( productId == 1) {
      return new Product( 'iPhone7', 1);
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
