import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-banner',
  templateUrl: './card-banner.component.html',
  styleUrls: ['./card-banner.component.css']
})
export class CardBannerComponent implements OnInit {
  @Input() imgSrc!:string;
  @Input() regEndTime!:string;
  @Input() regStatus!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
