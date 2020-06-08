import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './section5-reusablecomponents/parent/parent.component';
import { DataHandlingEventsComponent } from './section-4/data-handling-events/data-handling-events.component';
import { ExDirectivesComponent } from './section6-directives/ex-directives/ex-directives.component';
import { ContactFormComponent } from './section7-temp-driven-forms/contact-form/contact-form.component';
import { SignupFormComponent } from './sec8-reactiveforms/signup-form/signup-form.component';
 

const routes: Routes = [
  // {path: 'myexample', component: MyExampleComponent},
  // {path: 'maxiexample', component: MaxiExampleComponent}
  // section 8
  { path: '', component: HomeComponent },
  { path: 'sec4', component: DataHandlingEventsComponent},
   { path: 'sec5', component: ParentComponent},
   { path: 'sec6', component: ExDirectivesComponent},
   { path: 'sec7', component: ContactFormComponent},
   { path: 'sec8', component: SignupFormComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
