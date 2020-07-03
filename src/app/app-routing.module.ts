import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { BasicFormComponent } from './basicForm/basicForm.component';
import { ControlValueAccessorComponent } from './controlValueAccessor/controlValueAccessor.component';

const routes: Routes = [
  // { path: '', pathMatch:'full', redirectTo: '/basicForm' },
  // { path: 'basicform',  component: BasicFormComponent },
  { path: 'ControlValueAccessor',  component: ControlValueAccessorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
   ControlValueAccessorComponent
  ];
}

