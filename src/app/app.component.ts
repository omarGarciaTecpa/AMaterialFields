import { Component, OnInit } from '@angular/core';

export interface AppNavigationMenuItem{
  label: string;
  link: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular Material Fields';
  navigationMenu : AppNavigationMenuItem[];

  constructor(){

  }

  ngOnInit(){
    this.navigationMenu = [
      {label: 'Loading Button', link : './loadingButton'}
    ];
  }


  
}
