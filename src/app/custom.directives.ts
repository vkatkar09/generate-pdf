import {Directive,ElementRef, Renderer, HostListener} from '@angular/core';
@Directive({
    selector:'[cccardD]'
})

export class CustomDirective {
    constructor(private el: ElementRef, private RD: Renderer){
//    el.nativeElement.style.backgroundColor = 'red';
//    el.nativeElement.style.color = 'white';
//    el.nativeElement.style.fontSize = '25px';
//   RD.setElementStyle(el.nativeElement, 'backgroundColor', 'red');
//   RD.setElementStyle(el.nativeElement, 'color', 'white');
//   RD.setElementStyle(el.nativeElement, 'fontSize', '35px');

    }

    @HostListener('mousemove') onmousemove(){
        this.RD.setElementStyle(this.el.nativeElement, 'backgroundColor', 'red');
        this.RD.setElementStyle(this.el.nativeElement, 'color', 'white');
        this.RD.setElementStyle(this.el.nativeElement, 'fontSize', '35px');
    };

    @HostListener('mouseout') onmouseout(){
        this.RD.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
        this.RD.setElementStyle(this.el.nativeElement, 'color', 'black');
        this.RD.setElementStyle(this.el.nativeElement, 'fontSize', '22px');  
    }
}