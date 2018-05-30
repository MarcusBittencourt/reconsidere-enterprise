import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferred',
  templateUrl: './transferred.component.html',
  styleUrls: ['./transferred.component.css']
})
export class TransferredComponent implements OnInit {

  search: string;

  constructor() { }

  ngOnInit() {
  }

  last_transfers(): any[] {
    return [
      {id: '1', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '2', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '3', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '4', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '5', truck: 'DEF', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '6', truck: 'GHI', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '7', truck: 'GHI', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '8', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00},
      {id: '20', truck: 'ABC', date: '2018-01-01', starttime: '08:04', endtime: '10:33', duration: '02:29', wheight: 100.00}
    ];
  }

}
