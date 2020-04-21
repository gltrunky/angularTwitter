import { Component, OnInit } from '@angular/core';

import { Tw } from '../../models/tw';
import { TwService } from '../../services/tw/tw.service';

@Component({
  selector: 'app-tw-form-add',
  templateUrl: './tw-form-add.component.html',
  styleUrls: ['./tw-form-add.component.css']
})
export class TwFormAddComponent implements OnInit {

  tw: Tw = {
    id: null,
    message: '',
    id_user: 3,
    create_at: null,
    update_at: null,
  };

  constructor(
    private twService: TwService
  ) { }

  ngOnInit(): void {
  }

  saveTw(): void {
    this.twService.postPHPTw(this.tw).subscribe(tw => {
      console.log(tw);
    });
  }

}
