import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataHandlingEventsComponent } from './section-4/data-handling-events/data-handling-events.component';
import { SummaryPipe } from './section-4/summary.pipe';
import { FavoriteComponent } from './section5-reusablecomponents/favorite/favorite.component';
import { ParentComponent } from './section5-reusablecomponents/parent/parent.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelComponent } from './section5-reusablecomponents/panel/panel.component';
import { ExDirectivesComponent } from './section6-directives/ex-directives/ex-directives.component';
import { InputFormatDirective } from './section6-directives/input-format.directive';
import { ContactFormComponent } from './section7-temp-driven-forms/contact-form/contact-form.component';
import { SignupFormComponent } from './sec8-reactiveforms/signup-form/signup-form.component';
import { ExCheckEditorComponent } from './check-editor-example/ex-check-editor/ex-check-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    DataHandlingEventsComponent,
    SummaryPipe,
    FavoriteComponent,
    ParentComponent,
    HomeComponent,
    PanelComponent,
    ExDirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    ExCheckEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
