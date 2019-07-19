import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-button-example',
  templateUrl: './loading-button-example.component.html',
  styleUrls: ['./loading-button-example.component.scss']
})
export class LoadingButtonExampleComponent implements OnInit, OnChanges {
  label: string;
  loadingLabel: string;
  color: string;
  spinnerColor: string;
  disabled: boolean = false; 
  loading: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.color = "primary";
    this.spinnerColor = "primary";
    this.label = "Save";
    this.loadingLabel = "Loading"; 
  }

  ngOnChanges(){
    console.log(this);
  }


}
