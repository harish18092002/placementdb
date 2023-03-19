import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { datastr } from './interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
    this.router.navigate(['./details']);
    // const filterid = JSON.stringify(this.idlist)
    // console.log("This is the radio output", filterid)


    // // if (filterid.isselected = true) {
    // //   console.log("The is is correct")
    // // }
    // // else {
    // //   console.log("this is wrong")
    // // }
    // const numbers = [65, 44, 12, 4];
    // const newArr = numbers.map(myFunction)

    // function myFunction(num: any) {
    //   alert(num * 10);
    // }

    const selectedids = this.idlist
      .filter(obj => obj.isselected) // filter objects where isSelected is true
      .map(obj => obj.name);

    console.log(selectedids);
  }
  }
  // ngOnInit() {
  //   // this.getid();


  // }





//   routid() {
    
//   // user = [
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "1",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },

//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "2",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "3",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "4",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "5",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "6",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "7",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "8",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "9",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },
//   //   {
//   //     // studentid: `e_` + uuidv4(); 
//   //     selected: true,
//   //     cardData: {
//   //       id: "10",

//   //     },
//   //     studentdetails: {
//   //       package: "2000",
//   //       location: "chennai"
//   //     }
//   //   },

//   // ];

// }
// class id {
//   id!: number;
//   name!: string;
//   isselected!: boolean;
// }


