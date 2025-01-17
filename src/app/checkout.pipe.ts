import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkout',
  standalone: true
})
export class CheckoutPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
