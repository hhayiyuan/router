import {ProductComponent} from '../product/product.component';
import {CanDeactivate} from '@angular/router';
/**
 * Created by admin on 2018/6/19.
 */
export class UnsavedGuard implements  CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('还没有保存确定要离开吗？');
  }
}
