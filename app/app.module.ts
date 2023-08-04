import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserTableComponent } from './users/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
