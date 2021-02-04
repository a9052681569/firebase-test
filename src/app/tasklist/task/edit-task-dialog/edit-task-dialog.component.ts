import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'app-edit-task-dialog',
	templateUrl: './edit-task-dialog.component.html',
	styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public taskForm: FormGroup) { }

	ngOnInit(): void {
	}

}
