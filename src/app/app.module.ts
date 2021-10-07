import { Error404Component } from './error-404/error-404-component';
import { StarComponent } from './courses/star/star-component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseListComponet } from './courses/course-list-component';
import { NavBarComponent } from './nav-bar/nav-bar-component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponet,
    StarComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path:'', redirectTo: 'courses', pathMatch: 'full'
    },
    {
      path:'courses', component: CourseListComponet
    },
    {
      path:'**', component: Error404Component
    }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
