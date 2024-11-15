import { AfterViewInit, Directive, ElementRef, Host, Input, NgModule, Optional } from '@angular/core';
import { IgxGridComponent, IgxGridModule } from 'igniteui-angular';

@Directive({
  selector: '[igxPreventDocumentScroll]'
})
export class IgxPreventDocumentScrollDirective implements AfterViewInit {
  private _preventScroll = true;
  private gridBody: HTMLElement;

  /**
   * A boolean indicating if page scroll should be prevented while mouse wheeling over the grid,
   * when grid scroll has reached top or bottom. Defaults to true.
   * ```html
   * <igx-grid igxPreventDocumentScroll></igx-grid>
   * <igx-grid [igxPreventDocumentScroll]="false"></igx-grid>
   * ```
   */
  @Input('igxPreventDocumentScroll')
  public set preventScroll(val: boolean) {
    if (val === false) {
      this._preventScroll = false;
    }
  }

  constructor(@Host() @Optional() private grid: IgxGridComponent, private elementRef: ElementRef) {
    this.gridBody = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    if (this._preventScroll) {
      this.gridBody.addEventListener('wheel', this.preventDocumentScroll, { passive: false });
    }
  }

  ngOnDestroy() {
    this.gridBody.removeEventListener('wheel', this.preventDocumentScroll);
  }

  private preventDocumentScroll(event: WheelEvent) {
    event.preventDefault();
  }
}

@NgModule({
  declarations: [IgxPreventDocumentScrollDirective],
  exports: [IgxPreventDocumentScrollDirective],
  imports: [IgxGridModule]
})
export class IgxPreventDocumentScrollModule {}
