import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { BinderComponent } from './binder.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent, 
                  BinderComponent],
  exports: [FormComponent ,
            BinderComponent],
  providers:[BsModalService]
})
export class BinderModule { }
