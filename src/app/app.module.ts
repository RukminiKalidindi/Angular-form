import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatButtonModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequiredTextboxComponent } from './controlValueAccessor/required-textbox.component';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import { PhoneTextboxComponent } from './controlValueAccessor/phone-textbox.component';
import { AddTeamMemberDialogComponent } from './add-team-member-dialog/add-team-member-dialog.component';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:      [ ModalModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [ PhoneTextboxComponent, AppComponent, AppRoutingModule.components, RequiredTextboxComponent, CamelToTitlePipe, AddTeamMemberDialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }