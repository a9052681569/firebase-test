import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Task, TaskList} from '../app.component';
import {Observable, of} from 'rxjs';
import {take} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-tasklist',
	templateUrl: './tasklist.component.html',
	styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

	@Input() list: TaskList;

	@Output() removeList = new EventEmitter<string>();

	taskList: AngularFirestoreCollection<Task> | undefined;

	displayedTaskList: Observable<Task[]> = of([]);

	constructor(private db: AngularFirestore) { }

	ngOnInit(): void {
		this.taskList = this.db.collection<Task>(this.list.name);

		this.displayedTaskList = this.taskList.valueChanges({idField: 'id'});
	}

	add(): void {
		this.taskList?.add({name: 'задача', comment: 'some comment', id: `${Math.floor(Math.random())}`});
	}

	delete(): void {
		this.displayedTaskList.pipe(take(1)).subscribe((tasks: Task[]) => {
			tasks.forEach((task: Task) => {
				this.taskList?.doc(task.id).delete();
			});
		});

		this.removeList.emit(this.list.id);
	}

	deleteDask(id: string): void {
		this.taskList?.doc(id).delete();
	}

	editTask(task: Task): void {
		this.taskList?.doc(task.id).update(task);
	}

	drop(event: CdkDragDrop<Task[]>): void {
		console.log(event);
		const item = event.previousContainer.data[event.previousIndex];
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {

			this.db.collection(event.previousContainer.id).doc(item.id).delete();
			this.db.collection(event.container.id).add(item);
		}
	}

}
