import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() value1!: string;
  @Input() value2!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
