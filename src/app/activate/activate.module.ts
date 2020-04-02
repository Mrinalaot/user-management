import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ActivateUserComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ActivateUserComponent
  ]
})
export class ActivateModule { }
