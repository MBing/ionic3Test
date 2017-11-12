import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSampleItemPage } from './edit-sample-item';

@NgModule({
  declarations: [
    EditSampleItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSampleItemPage),
  ],
})
export class EditSampleItemPageModule {}
