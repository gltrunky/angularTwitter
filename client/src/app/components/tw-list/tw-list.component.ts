import { Component, OnInit } from '@angular/core';

import { Tw } from '../../models/tw';
import { TwService } from '../../services/tw/tw.service'

@Component({
  selector: 'app-tw-list',
  templateUrl: './tw-list.component.html',
  styleUrls: ['./tw-list.component.css']
})
export class TwListComponent implements OnInit {

  tws: Tw[]

  constructor(
    private twService: TwService
  ) { }

  ngOnInit(): void {
    this.getTws();
  }

  getTws(): void {
    this.twService.getPHPTws()
    .subscribe(tws => this.tws = tws);
  }

}
