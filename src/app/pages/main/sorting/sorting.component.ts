import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {IgxPreventDocumentScrollModule} from '../../../core/directives/prevent-scroll.directive'
import {
	IgxTreeGridModule,
	IgxIconModule,
	IgxSimpleComboModule,
	IgxButtonModule,
  IgxTreeGridComponent,
  ISortingOptions,
  SortingDirection,
  DefaultSortingStrategy,
  IgxGridModule,

 } from "igniteui-angular";
import { TableData } from '../../../core/data/table-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [
    IgxTreeGridModule,
    IgxIconModule,
    IgxGridModule,
    IgxSimpleComboModule,
    IgxButtonModule,
    IgxPreventDocumentScrollModule,
    FormsModule,
  ],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss'
})

export class SortingComponent implements OnInit, AfterViewInit {
    @ViewChild('sortingGrid', { read: IgxTreeGridComponent, static: true }) sortingGrid!: IgxTreeGridComponent;
     data!: any[];
     contextmenu:boolean = false;
     contextmenuX = 0;
     contextmenuY = 0;
     clickedCell = null;
     sortingTypes: ISortingOptions[] = [
        {
            mode: 'single'
        }, {
            mode: 'multiple'
        }
    ];
    sortingOptions: ISortingOptions = this.sortingTypes[1];
    selectOptions = [5, 15, 20, 50];


    constructor() { }

    public ngOnInit(): void {
        this.data = TableData;
    }

    public ngAfterViewInit(): void {
        this.sortingGrid.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'id',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs:any) {
      eventArgs.event.preventDefault();
      this.contextmenuX = eventArgs.event.clientX;
      this.contextmenuY = eventArgs.event.clientY;
      this.contextmenu = true;
      this.clickedCell = eventArgs.cell;
    }

    public disableContextMenu() {
      this.contextmenu = false;
    }

    handleSearchResults(event: KeyboardEvent) {
        event.preventDefault();
    }
}

