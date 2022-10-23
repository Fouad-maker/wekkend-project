import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../services/lottery.service';

@Component({
  selector: 'app-open-bet-form',
  templateUrl: './open-bet-form.component.html',
  styleUrls: ['./open-bet-form.component.css']
})
export class OpenBetFormComponent implements OnInit {

  constructor(private lotterySvc: LotteryService) { }

  ngOnInit(): void {
  }


  onOpenBet(value: any) {


  }

}
