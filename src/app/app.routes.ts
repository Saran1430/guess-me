import { RouterModule,Routes } from '@angular/router';
import { Quiz } from './pages/quiz/quiz';
import { NgModule } from '@angular/core';
import { Start } from './pages/start/start';
import { Result } from './pages/result/result';

// export const routes: Routes = [];
export const routes: Routes = [
  { path: '', component: Start },
  { path: 'quiz', component: Quiz },
  { path: 'result', component: Result },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }