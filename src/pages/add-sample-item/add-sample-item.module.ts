import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSampleItemPage } from './add-sample-item';

@NgModule({
  declarations: [
    AddSampleItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSampleItemPage),
  ],
})
export class AddSampleItemPageModule {}
