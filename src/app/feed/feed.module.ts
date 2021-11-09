import { ShareComponentModule } from './../components/share-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    ShareComponentModule,
  ],
  declarations: [FeedPage],
})
export class FeedPageModule {}
