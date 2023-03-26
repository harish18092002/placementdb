import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-navdetails',
  templateUrl: './navdetails.component.html',
  styleUrls: ['./navdetails.component.css']
})
export class NavdetailsComponent {
  field1 !: string;
  field2!: string;
  field3!: number;
  field4!: number;
  field5!: number;


  labels: any = {};
  Object: any;

  addNewLabel() {
    const label = window.prompt("Enter a label:");
    const dataType = window.prompt("Enter the data type:");

    // Add the new label to the labels object
    this.labels[label ?? ""] = dataType;

  }
}
