import { Pipe, PipeTransform } from '@angular/core';
import { Question } from './question';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(questions: Array<any>, filterString: string): Array<any> {
        return filterString == undefined ? questions : questions.filter((dog) => dog.headline.toLowerCase().includes(filterString.toLowerCase()));
    }
}