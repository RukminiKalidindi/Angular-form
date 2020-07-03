import { Component } from '@angular/core';
import { AddTeamMemberDialogComponent } from './add-team-member-dialog/add-team-member-dialog.component';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  form: any;
  projects: string[];
  submitted: boolean = false;
  teamMemberModal: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.projects = ['Project 1', 'Project 2'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    // this.teamMemberModal = false;
    this.form = form;
  }

  onShowModal()  {
    this.submitted = false;
    this.teamMemberModal = true;
    //this.form = form;
  }
}
