import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-img',
  templateUrl: './display-img.component.html',
  styleUrls: ['./display-img.component.scss'],
})
export class DisplayImgComponent implements OnInit {
  @Input() imgsrc = '';
  @Input() cssClass = '';
  constructor() {}
  ngOnInit() {}
}
