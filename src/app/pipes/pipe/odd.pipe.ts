import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({ name: 'odd'})

export class OddPipe implements PipeTransform {

    transform(array: Array<number>) {
        return array.filter(n => n % 2 == 1)

    }
}
