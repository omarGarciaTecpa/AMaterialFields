import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amf-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {
  @Input() color: string;
  @Input() spinnerColor: string;

  @Input() label: string;
  @Input() loadingLabel: string;

  @Input() disabled: boolean;
  @Input() loading: boolean;


  constructor() { }

  ngOnInit() {
    this.colorDefaultValue();
    this.defaultLoadingLabel();
    this.defaultSpinnerColor();
  }

  private colorDefaultValue() {
    if (!this.color) {
      this.color = "primary";
    }
  }

  private defaultLoadingLabel() {
    if (!this.loadingLabel) {
      this.loadingLabel = "Loading";
    }
  }

  private defaultSpinnerColor() {
    if (!this.spinnerColor) {
      this.spinnerColor = "primary";
    }
  }

}
