import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tw-edit',
  templateUrl: './tw-edit.component.html',
  styleUrls: ['./tw-edit.component.css']
})
export class TwEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('twId');
  }

}