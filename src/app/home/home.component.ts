import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }
  data: any = {};

  gotodetails() {
    this.router.navigate(['./details']);
    console.log("This is the radio output", this.data)
  }



  user = [
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "1",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },

    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "2",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "3",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "4",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "5",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "6",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "7",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "8",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "9",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "10",

      },
      studentdetails: {
        package: "2000",
        location: "chennai"
      }
    },

  ];

}
