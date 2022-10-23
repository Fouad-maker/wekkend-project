import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tx-receipe',
  templateUrl: './tx-receipe.component.html',
  styleUrls: ['./tx-receipe.component.css']
})
export class TxReceipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  txReceipe = {
    tx: "0xhddkd5d44d5d4d45d45d4d5d45d5d5"
  }
}
