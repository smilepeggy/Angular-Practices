import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "assignment4";
  oddNumbers = [];
  evenNumbers = [];
  eventTrigger(number: number) {
    console.log(number);
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
      console.log(this.evenNumbers);
    } else {
      this.oddNumbers.push(number);
      console.log(this.oddNumbers);
    }
  }
}
