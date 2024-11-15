import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PagingComponent } from './paging/paging.component';
import { SortingComponent } from './sorting/sorting.component';
import { EditingComponent } from './editing/editing.component';
import { FilteringComponent } from './filtering/filtering.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'paging',
        component: PagingComponent
      },
      {
        path: 'sorting',
        component: SortingComponent
      },

      {
        path: 'editing',
        component: EditingComponent
      },

      {
        path: 'filtering',
        component: FilteringComponent
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
