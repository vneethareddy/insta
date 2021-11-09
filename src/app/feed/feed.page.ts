import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/commonHttpHandler';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  postList: any;
  userInfo: any;
  userName: string;
  constructor(private restAPI: RestApiService) {}

  ngOnInit() {
    this.restAPI.getUserInfo().subscribe((data: {}) => {
      this.userInfo = data;
      this.userName =
        this.userInfo.results[0].name.title +
        ' ' +
        this.userInfo.results[0].name.first +
        ' ' +
        this.userInfo.results[0].name.last;
    });

    this.restAPI.getFeedList().subscribe((data: {}) => {
      console.log('data', data);
      this.postList = data;
      console.log('data', this.postList);
    });
  }
}
