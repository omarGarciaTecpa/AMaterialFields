import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonExampleComponent } from './loading-button-example/loading-button-example.component';
import { AngularMaterialFormsModule } from '../angular-material-forms/angular-material-forms.module';



@NgModule({
  declarations: [LoadingButtonExampleComponent],
  imports: [
    CommonModule,
    AngularMaterialFormsModule
  ]
})
export class ExamplesModule { }
