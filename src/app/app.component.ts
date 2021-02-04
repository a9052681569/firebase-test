import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable, of} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'firebase-test';

	listNames: AngularFirestoreCollection<TaskList> | undefined;

	displayedLists: Observable<TaskList[]> = of([]);

	constructor(private db: AngularFirestore) {
	}

	ngOnInit(): void {
		this.listNames = this.db.collection('lists-names');

		this.displayedLists = this.listNames.valueChanges({idField: 'id'});
	}

	add(name: string): void {
		this.listNames?.add({name, id: `${Math.floor(Math.random())}`});
	}

	removeList(id: string): void {
		this.listNames?.doc(id).delete();
	}
}

export interface TaskList {
	name: string;
	id: string;
}

export interface Task {
	name: string;
	comment: string;
	id: string;
}
