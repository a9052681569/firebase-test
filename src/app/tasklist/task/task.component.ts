import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from '../../app.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditTaskDialogComponent} from './edit-task-dialog/edit-task-dialog.component';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

	@Input() task: Task;

	@Output() deleteTask = new EventEmitter<string>();

	@Output() editTask = new EventEmitter<Task>();

	taskForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialog: MatDialog) { }

	ngOnInit(): void {
		this.taskForm = this.fb.group(this.task);
	}

	delete(): void {
		this.deleteTask.emit(this.task.id);
	}

	edit(): void {

		this.dialog.open(EditTaskDialogComponent, { data: this.taskForm})
			.afterClosed()
			.subscribe(() => {
				this.editTask.emit(this.taskForm.value);
			});
	}
}
