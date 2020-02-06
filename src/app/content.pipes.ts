import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'content'
})

export class ContentPipe implements PipeTransform {
    transform(val,arg){
      if(arg === undefined){return val;}
      if(val.length >= arg) {return val.substring(0,arg) + '...'}
    }
}