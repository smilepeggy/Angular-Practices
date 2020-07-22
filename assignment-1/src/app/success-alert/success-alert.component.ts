import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  name = '';
  clicked = false;

  userName = '';
  usernameEmpty = false;
  constructor() {
    setTimeout(() => {
      this.clicked = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onUpdateName(event: Event) {
    // console.log(event);
    this.name = (<HTMLInputElement>event.target).value;
    console.log(this.name);
  }
  // onUpdateName(event: any) {
  //   console.log(event);
  //   this.name = event.target.value;
  //   console.log(this.name);
  // }


  clearUsername() {

    console.log('clear');
    this.userName = '';
  }
}
