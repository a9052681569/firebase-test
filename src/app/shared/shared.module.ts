import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule { }
