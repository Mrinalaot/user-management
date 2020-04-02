import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './shared/user/user.component';
import { UserlistComponent } from './shared/userlist/userlist.component';
import { ActivateUserComponent } from './activate/activate-user/activate-user.component';
import { DeletedUserComponent } from './deleted/deleted-user/deleted-user.component';
import { ManageUserComponent } from './manage/manage-user/manage-user.component';
import { UserDetailsComponent } from './manage/user-details/user-details.component';
import { ManageModule } from './manage/manage.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // UserComponent,
    // UserlistComponent,
    //ActivateUserComponent,
    //DeletedUserComponent,
     //ManageUserComponent,
    // UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
