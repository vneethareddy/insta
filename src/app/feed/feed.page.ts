import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/commonHttpHandler';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  postList: any;
  picturesList: any;
  userInfo: any;
  userName: string;
  constructor(private restAPI: RestApiService) {}

  ngOnInit() {
    this.getUserInfo();
    this.getUFeedData();
    this.getPictures();
  }

  async getUserInfo() {
    await this.restAPI.getUserInfo().subscribe((data: {}) => {
      this.userInfo = data;
      this.userName =
        this.userInfo.results[0].name.title +
        ' ' +
        this.userInfo.results[0].name.first +
        ' ' +
        this.userInfo.results[0].name.last;
    });
  }
  async getUFeedData() {
    await this.restAPI.getFeedList().subscribe((feedData: {}) => {
      this.postList = feedData;
    });
  }
  async getPictures() {
    await this.restAPI.getPictures().subscribe((picData: {}) => {
      this.picturesList = picData;
    });
  }
}
