import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingButtonExampleComponent } from './examples/loading-button-example/loading-button-example.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'loadingButton', component: LoadingButtonExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
