import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCardDirective implements OnChanges {
  @Input() externalColor: string = 'black';
  @Input('appHighlightCard') defaultColor: string = 'red'

  constructor(private elem: ElementRef) {
  }
  ngOnChanges() {
    this.elem.nativeElement.style.backgroundColor = this.defaultColor
  }



  @HostListener('mouseover') over() {
    this.elem.nativeElement.style.backgroundColor = this.externalColor
  }

  @HostListener('mouseout') out() {
    this.elem.nativeElement.style.backgroundColor = this.defaultColor
  }

}
