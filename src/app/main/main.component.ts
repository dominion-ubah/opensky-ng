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
  loading:boolean=false;
  
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

    this.showAirportByIcao('LFPG')

    $(document).ready(function(){
      $('.modal').modal();
    });
    
    $(document).ready(function(){
      $('.collapsible').collapsible();
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

  submitArrival(e) {
    this.loading = true;
    let icao =localStorage.getItem('icao'),
    endTime  = this.arrivalTimeForm.value.arrivalTime
    this.mainService.getArrivalByAirport(endTime, icao)
    .subscribe(data =>  {
      // console.log('departure', data)})
       let newD = JSON.parse(JSON.stringify(data));

       console.log('data', newD)
       this.loading = false;
       this.arrivalArr = newD.map(e => {
         return {
          icao24: e.icao24,
          firstSeen: e.firstSeen,
          estDepartureAirport: e.estDepartureAirport,
          // estDepartureAirport: this.showAirportByIcao(e.estDepartureAirport),
          lastSeen: e.lastSeen,
          estArrivalAirport: e.estArrivalAirport,
          // estArrivalAirport: this.showAirportByIcao(e.estArrivalAirport),
          callsign: e.callsign,
          estDepartureAirportHorizDistance: e.estDepartureAirportHorizDistance,
          estDepartureAirportVertDistance: e.estDepartureAirportVertDistance,
          estArrivalAirportHorizDistance: e.estArrivalAirportHorizDistance,
          estArrivalAirportVertDistance: e.estArrivalAirportVertDistance,
          departureAirportCandidatesCount: e.departureAirportCandidatesCount,
          arrivalAirportCandidatesCount: e.arrivalAirportCandidatesCount
         }
       })
    // .subscribe(data =>  console.log('arrival', data))
  },
  error => {
    console.error(error)
    this.loading = false;
  }
  )
  
}

  submitDeparture(e) {
    this.loading = true;
    let icao =localStorage.getItem('icao'),
    endTime  = this.departureTimeForm.value.departureTime
    console.log('data sent',endTime, icao);
    this.mainService.getDepartureByAirport(endTime, icao)
    .subscribe(data =>  {
      this.loading = false;
      // console.log('departure', data)})
       let newD = JSON.parse(JSON.stringify(data));

       console.log('data', newD)
       this.departureArr = newD
    },
    error => {
      console.error(error)
      this.loading = false;
    })
    
  }

  showAirportByIcao(e) {
    
    this.mainService.getAirportByIcao(e)
    .subscribe(data =>  
      // console.log('departure', data)})
      //  let newD = data

       console.log('data', data)
      //  return newD.Location_Nam
      //  this.departureArr = newD
    )
    
  }

  openModal(icao) {
    localStorage.setItem('icao', icao)
  }

  closeModal(icao) {
    localStorage.removeItem('icao')
  }

}