import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // Déclare le fait que je vais recevoir une variable qui va s'appeller appHighLight, et que je mets dans bgColor
  @Input('appHighlight') bgColor: string;

  @Input() color: string;

  // ElementRef --> "Capsule" qui permet de capter la balise que l'on reçoit, sachant que les directives s'utilise dans les balises
  constructor(private eltRef: ElementRef) { }

  // Pose un addEventListener sur la balise où l'on a mis la directive, avec le @ étant un décorateur !
  @HostListener('mouseover') onMouseOver() {
    this.highlight(this.bgColor || 'orange', this.color);
  }

  @HostListener('mouseout') onMouseOut() {
    this.highlight('initial', 'initial');
  }

  private highlight(bgColor:  string, color?: string) {
    // console.log(this.eltRef);
    this.eltRef.nativeElement.style.backgroundColor = bgColor;
    this.eltRef.nativeElement.style.color = color;
  }
}
