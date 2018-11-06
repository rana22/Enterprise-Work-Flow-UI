import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

const appRoutes: Routes = [
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'documents', loadChildren: '../../binder/binder.module#BinderModule'}
];

@NgModule({    
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
