import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class BindingDataComponent implements OnInit {

  constructor() { }
  username: string = "";
  ngOnInit(): void {
  }

  // Method to determine if username is empty or not
  // the return value is used to determine if the button
  // should be disabled or not
  checkUsername() {
    return (this.username === '' ? true : false);
  }

  // click event on the button to reset username value
  emptyUsername() {
    this.username = '';
  }

}
