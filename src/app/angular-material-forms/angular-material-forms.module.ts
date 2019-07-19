import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';



const moduleList = [
  CommonModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatListModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatInputModule
];

const declarationExport = [
  LoadingButtonComponent
];

const exportList = [...moduleList, ...declarationExport];


@NgModule({
  declarations: [LoadingButtonComponent],
  imports: moduleList,
  exports: exportList,
  providers: []
})
export class AngularMaterialFormsModule { }
