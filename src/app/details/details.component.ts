import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  addNew = false;


  // this the db for students
  users = [
    {
      selected: true,
      cardData: {
        id: "1",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '2000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "7",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '7000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "8",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '8000',
        },
        {
          title: 'Location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "9",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'ABC',
        },
        {
          title: 'Package',
          value: '9000',
        },
        {
          title: 'Location',
          value: 'T.nagar'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: false,
      cardData: {
        id: "10",

      },
      studentdetails: [
        {
          title: 'Comapany',
          value: 'xyz',
        },
        {
          title: 'Package',
          value: '10000',
        },
        {
          title: 'Location',
          value: 'Ooty'
        }


      ]
    },

  ];




  selectedstudent = this.users[0];
  showdetails = false;
  showListElements = false;
  setSelectedstudent(user: any) {
    this.users.forEach((user) => {
      user.selected = false;
    });
    user.selected = true;
    this.selectedstudent = user;
  }


  onSubmit(data: any) {
    this.addNew = false;
    data = {

      selected: true,
      cardData: {
        id: data.id,
      },
      studentdetails: [
        {
          title: 'Company',
          value: data.company,
        },
        {
          title: 'Package',
          value: data.package,
        },
        {
          title: 'Loction',
          value: data.location
        },

      ],

    };

    console.log('new service framed', data);
    this.selectedstudent = data;
    this.users.push(data);
    console.log("This is the updated users" + this.users)
  }

  addNewService() {
    this.users.forEach((item) => (item.selected = false));
    this.addNew = true;
  }
  cancelAddForm() {
    this.selectedstudent = this.users[0];
    this.selectedstudent.selected = true;
    this.addNew = false;
  }
  // update() {
  //   const use = JSON.stringify(this.users)
  //   console.log("This is the updated users" + use)
  // }

}
