import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {IPaginatorResourceStrings, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorComponent, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule} from 'igniteui-angular'
import { TableData } from '../../../core/data/table-data';
import {IgxPreventDocumentScrollModule} from '../../../core/directives/prevent-scroll.directive'

@Component({
  selector: 'app-paging',
  standalone: true,
  imports: [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxPreventDocumentScrollModule
  ],
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss'
})

export class PagingComponent {
  @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
  data!: any[];
  selectOptions = [5, 15, 20, 50];


  constructor(private cdr: ChangeDetectorRef) {}

   ngOnInit(): void {
      this.data = TableData;
  }

   ngAfterViewInit(): void {
    this.cdr.detectChanges();
}


}











