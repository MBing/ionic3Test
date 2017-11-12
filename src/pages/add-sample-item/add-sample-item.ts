import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item/item.model';
import { SampleListService } from '../../services/sample-list/sample-list.service';

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

  constructor(
	  	public navCtrl: NavController,
	  	public navParams: NavParams,
	  	private sample: SampleListService
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSampleItemPage');
  }

  addItem(item: Item) {
  	this.sample.addItem(item).then(ref => {
  		// console.log('test with ref.key');
  		this.navCtrl.setRoot('HomePage', { key: ref.key })
  	})
  }
}
