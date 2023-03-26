import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { datastr } from './interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() field1 !: string;
  @Input() field2!: string;

  selectedids: any;
  constructor(private router: Router) { }
  // data: any = {};
  idlist: datastr[] = [
    { id: 1, name: "1", isselected: false },
    { id: 2, name: "2", isselected: false },
    { id: 3, name: "3", isselected: false },
    { id: 4, name: "4", isselected: false },
    { id: 5, name: "5", isselected: false },

  ]
  gotodetails() {
    // this.router.navigate(['./details']);
    this.selectedids = this.idlist
      .filter(obj => obj.isselected) // filter objects where isSelected is true
      .map(obj => obj.id);
    this.router.navigate(['/details'], { queryParams: { id: this.selectedids.join(',') } });

    console.log(this.selectedids);
    // if (this.selectedids! == null) {
    // }
    // else {
    //   alert("Please select the register numbers to navigate to next page")
    // }


  }

}


