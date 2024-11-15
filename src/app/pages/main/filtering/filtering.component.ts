import { Component } from '@angular/core';
import {
	IgxTreeGridModule,
	IgxIconModule,
	IgxSimpleComboModule,
	IgxButtonModule,
  IgxGridModule,
  IgxHierarchicalGridModule,

 } from "igniteui-angular";
 import {IgxPreventDocumentScrollModule} from '../../../core/directives/prevent-scroll.directive'
import { TableData } from '../../../core/data/table-data';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [
    IgxTreeGridModule,
    IgxIconModule,
    IgxGridModule,
    IgxSimpleComboModule,
    IgxButtonModule,
    IgxPreventDocumentScrollModule,
    IgxHierarchicalGridModule,
    FormsModule,

  ],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss'
})
export class FilteringComponent {

  data!: any;

  ngOnInit():void {
      this.data = TableData;
  }


}
