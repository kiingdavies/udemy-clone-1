import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CourseSectionComponent } from './components/course-section/course-section.component';
import { StudentsViewsComponent } from './components/students-views/students-views.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CourseSectionComponent,
    StudentsViewsComponent,
    RecommendationsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
