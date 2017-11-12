import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {Observable} from "rxjs/Observable";

import { SampleListService } from '../../services/sample-list/sample-list.service';
import {Item} from "../../models/item/item.model";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	sampleList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private sample: SampleListService) {
  	this.sampleList$ = this.sample
  		.getSampleList() //DB List
  		.snapshotChanges() // key and value
  		.map(changes => {
  			return changes.map(c => ({
  				key: c.payload.key,
  				...c.payload.val()
  			}))
  		})
  }

}
