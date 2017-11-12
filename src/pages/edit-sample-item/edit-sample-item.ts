import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from "../../models/item/item.model";
import { SampleListService } from "../../services/sample-list/sample-list.service";
import { ToastService } from "../../services/toast/toast.service";

@IonicPage()
@Component({
  selector: 'page-edit-sample-item',
  templateUrl: 'edit-sample-item.html',
})
export class EditSampleItemPage {
  item: Item

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sample: SampleListService,
    private toast: ToastService
  ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.sample.editItem(item)
      .then(() => {
        this.toast.show(`${item.name} saved!`);
        this.navCtrl.setRoot('HomePage');
      })
  }
}
