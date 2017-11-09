import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-add-sample-item',
  templateUrl: 'add-sample-item.html',
})
export class AddSampleItemPage {
	item: Item = {
		name: '',
		quantity: null,
		price: null
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSampleItemPage');
  }

}
