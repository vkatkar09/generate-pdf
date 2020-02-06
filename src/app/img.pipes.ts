import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'imgHttp'
})

export class Imgpipe implements PipeTransform {
    transform(val:any,arg:any, httpOption:boolean){
         let img = '';
         if(val){
             img = val;
         }
           else {
               img = arg;
           }
              if(httpOption){
                  if(img.indexOf("https")=== -1){
                      img = img.replace("http", "https");
                  }
              }
           return img;
    }
}