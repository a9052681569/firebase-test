import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './tasklist/task/task.component';
import { EditTaskDialogComponent } from './tasklist/task/edit-task-dialog/edit-task-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
	declarations: [
		AppComponent,
		TasklistComponent,
		TaskComponent,
		EditTaskDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFireStorageModule,
		BrowserAnimationsModule,
		SharedModule,
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
