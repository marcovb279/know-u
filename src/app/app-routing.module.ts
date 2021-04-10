import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppQuestionsListComponent } from './app-questions-list/app-questions-list.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppCustomizeComponent } from './app-customize/app-customize.component';

const routes: Routes = [{ path: 'home', component: AppHomeComponent, data: { animation: 'home' } },
{ path: 'questions', component: AppQuestionsListComponent, data: { animation: 'questions' } },
{ path: 'about', component: AppAboutComponent, data: { animation: 'about' } },
{ path: 'customize', component: AppCustomizeComponent, data: { animation: 'customize' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
