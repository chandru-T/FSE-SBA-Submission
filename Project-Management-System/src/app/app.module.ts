import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectPipe } from './projects/project.pipe';
import { UserPipe } from './user/user.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './add-task/add-task.component';
import { ParentTaskPipe } from './tasks/parentTask.pipe';
import { EditTaskComponent } from './edit-task/edit-task.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    
    AddTaskComponent,
    EditTaskComponent,
    TasksComponent,
    ProjectsComponent,
    UserPipe,
    ProjectPipe,
    AppComponent,
    UserComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectPipe,
    UserPipe,
    ParentTaskPipe,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
