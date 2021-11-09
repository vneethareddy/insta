import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaypost',
  templateUrl: './displaypost.component.html',
  styleUrls: ['./displaypost.component.scss'],
})
export class DisplaypostComponent implements OnInit {
  @Input() userName: string;
  @Input() userPic: string;
  @Input() userPosts: any;
  @Input() userInfo: any;
  @Input() picPosts: any;

  constructor() {}

  ngOnInit() {}
}
