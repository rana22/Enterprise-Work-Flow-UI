import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinderComponent } from './binder.component';
const appRoutes: Routes = [
  { path: '', component: BinderComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class BinderRoutingModule { }