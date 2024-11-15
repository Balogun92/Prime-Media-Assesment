import { Component } from '@angular/core';
import {
	IgxTreeGridModule,
	IgxIconModule,
	IgxSimpleComboModule,
	IgxButtonModule,
  IgxGridModule,
  IgxHierarchicalGridModule,
  IgxFocusModule,

 } from "igniteui-angular";
 import {IgxPreventDocumentScrollModule} from '../../../core/directives/prevent-scroll.directive'
 import { TableData } from '../../../core/data/table-data';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editing',
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
    IgxGridModule,
	IgxFocusModule

  ],
  templateUrl: './editing.component.html',
  styleUrl: './editing.component.scss'
})
export class EditingComponent {

  data!: any;

  ngOnInit():void {
      this.data = TableData;
  }


}
