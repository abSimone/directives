import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[evidenzia]'
})
export class EvidenziaDirective implements OnInit {

    constructor(private ref: ElementRef, private renderer: Renderer2) { }

    @Input() selectedColor: string = "transparent";

    ngOnInit() {
        // this.ref.nativeElement.style.backgroundColor = this.selectedColor;
        // this.renderer.setStyle(this.ref.nativeElement, "background-color", this.selectedColor);
    }

    @HostBinding("style.backgroundColor")
    bgColor: string = 'transparent';

    @HostListener('mouseenter')
    onMouseEnter() {
        // this.renderer.setStyle(this.ref.nativeElement, "background-color", this.selectedColor);
        this.bgColor = this.selectedColor
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.bgColor = 'transparent'
        // this.renderer.setStyle(this.ref.nativeElement, "background-color", 'transparent');
    }

}