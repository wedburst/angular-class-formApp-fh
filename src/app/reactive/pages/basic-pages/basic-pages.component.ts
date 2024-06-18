import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-pages.component.html',
  styles: []
})
export class BasicPagesComponent {
  //public myForm: FormGroup = new FormGroup({
  //  name: new FormControl(''),
  //  price: new FormControl(0),
  //  inStorage: new FormControl(0),
  //}); video 237

  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0],
  });

  constructor( private fb: FormBuilder ){}

  onSave():void{
    console.log("Form:", this.myForm.value);
  }
}
