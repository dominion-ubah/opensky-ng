import { Component, OnInit } from '@angular/core';
import { cities, timeOptions } from "../helpers/data";
import { MainService } from './main.service';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  
  
  countries = cities;
  timeOptions = timeOptions;
  departureArr;
  arrivalArr;
  arrivalTimeForm: FormGroup;
  departureTimeForm: FormGroup;
  states = [];
  
  constructor(
    private mainService: MainService,
    private formBuilder: FormBuilder
  ) {
    this.arrivalTimeForm = this.formBuilder.group({
      arrivalTime: ''
    });
    this.departureTimeForm = this.formBuilder.group({
      departureTime: ''
    });
   }

  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });

    $(document).ready(function(){
      $('.modal').modal();
    });

    this.showStates( )
  }

  showStates() {
    this.mainService.getStates()
    .subscribe((data) => console.log('we', data)
    // this.states = {
    //   heroesUrl: data['heroesUrl'],
    //   textfile:  data['textfile']
    // }
    )
  }

  submitArrival() {
    let icao =localStorage.getItem('icao'),
    endTime  = this.arrivalTimeForm.value.arrivalTime
    this.mainService.getArrivalByAirport(endTime, icao)
    .subscribe(data =>  console.log('arrival', data))
  }

  submitDeparture() {
    let icao =localStorage.getItem('icao'),
    endTime  = this.departureTimeForm.value.departureTime
    console.log('data sent',endTime, icao);
    this.mainService.getDepartureByAirport(endTime, icao)
    .subscribe(data =>  {
      // console.log('departure', data)})
       let newD = data;
       console.log('data', newD)
       this.departureArr = newD
    })
    
  }

  openModal(icao) {
    localStorage.setItem('icao', icao)
  }

  closeModal(icao) {
    localStorage.removeItem('icao')
  }

}