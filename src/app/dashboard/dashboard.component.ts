import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

datos = [];
charOpt: boolean = false;
locOpt: boolean = false;
epOpt: boolean = false;

// Función Traer Personajes
callCharacter() {
  this.datos = [];
  this.locOpt=false;
  this.epOpt=false;
  this.charOpt=true;
  var myInit =  {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  var myRequest = new Request("https://rickandmortyapi.com/api/character", myInit);
  fetch(myRequest).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
}
// Función Traer Ubicaciones
callLocations() {
  this.datos = [];
  this.charOpt=false;
  this.epOpt=false;
  this.locOpt=true;  
  var myInit =  {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  var myRequest = new Request("https://rickandmortyapi.com/api/location", myInit);
  fetch(myRequest).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
}
// Función Traer Episodios
callEpisodes() {
  this.datos = [];
  this.charOpt=false;
  this.locOpt=false;
  this.epOpt=true;
  var myInit =  {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  var myRequest = new Request("https://rickandmortyapi.com/api/episode", myInit);
  fetch(myRequest).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
}
// Limpia Tablas
clearTable() {
  this.charOpt=false;
  this.locOpt=false;
  this.epOpt=false;
  this.datos = [];
}
}