import { Component, OnInit } from '@angular/core';
import { countryData } from "../helpers/data";
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  
  constructor() { }
  
  countries = countryData

  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

}
