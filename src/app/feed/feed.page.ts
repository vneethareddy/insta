import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/commonHttpHandler';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  postList: any;
  constructor(private restAPI: RestApiService) {}

  ngOnInit() {
    this.restAPI.getUserInfo().subscribe((data: {}) => {
      console.log('data');
      this.postList = data;
    });
  }
}
