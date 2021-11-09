import { DisplayImgComponent } from './display-img/display-img.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedetailsComponent } from './sharedetails/sharedetails.component';
import { DisplaypostComponent } from './displaypost/displaypost.component';

@NgModule({
  declarations: [
    DisplayImgComponent,
    SharedetailsComponent,
    DisplaypostComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, IonicModule],
  exports: [DisplayImgComponent, SharedetailsComponent, DisplaypostComponent],
})
export class ShareComponentModule {}
