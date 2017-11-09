import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from '../../models/item/item.model';

@Injectable()
export class SampleListService {
	private sampleListRef = this.db.list<Item>('sample-list');

	constructor(private db: AngularFireDatabase) {

	}

	getSampleList() {
		return this.sampleListRef;
	}

	addItem(item: Item) {
		return this.sampleListRef.push(item);
	}
}
