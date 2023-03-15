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
  editing = false;

  // this the db for students
  users = [
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "1",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },

    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "2",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "3",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "4",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "5",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "6",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "7",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "8",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "9",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },
    {
      // studentid: `e_` + uuidv4(); 
      selected: true,
      cardData: {
        id: "10",

      },
      studentdetails: [
        {
          title: 'package',
          value: '2000',
        },
        {
          title: 'location',
          value: 'chennai'
        }


      ]
    },

  ];

  // db of customers
  // customers = [
  //   {
  //     customerId: `e_` + uuidv4(),
  //     selected: true,
  //     cardData: {
  //       Name: 'Harish',
  //       no: '9790909162',

  //     },
  //     customerDetails: [
  //       {
  //         title: 'Customer name',
  //         value: 'Harish',
  //       },
  //       {
  //         title: 'Status',
  //         value: 'Active',
  //       },
  //       {
  //         title: 'Customer ID',
  //         value: 'X78976TY6546I',
  //       },
  //       {
  //         title: 'Store name',
  //         value: 'Guduvanchery',
  //       },

  //     ],
  //     contact: [

  //       {
  //         title: 'Phone number',
  //         value: '9790909162',
  //       },


  //     ],
  //     address: [
  //       {
  //         title: 'Home',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //       },
  //       {
  //         title: 'Office',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //       },
  //     ],
  //   },

  //   // 2nd customer

  //   {
  //     customerId: 'X78976TY6546I',
  //     selected: false,
  //     cardData: {
  //       Name: 'Abin',
  //       no: '9987654321',

  //     },
  //     customerDetails: [
  //       {
  //         title: 'Customer name',
  //         value: 'Abin',
  //       },
  //       {
  //         title: 'Status',
  //         value: 'Active',
  //       },
  //       {
  //         title: 'Customer ID',
  //         value: 'X78976TY6546I',
  //       },
  //       {
  //         title: 'Store name',
  //         value: 'Guduvanchery',
  //       },

  //     ],
  //     contact: [

  //       {
  //         title: 'Phone number',
  //         value: '9987654321',
  //       },


  //     ],
  //     address: [
  //       {
  //         title: 'Home',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //       },
  //       {
  //         title: 'Office',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //       },
  //     ],
  //   },


  //   // 3rdcustomer

  //   {
  //     customerId: 'X78976TY6546I',
  //     selected: false,
  //     cardData: {
  //       Name: 'Arun',
  //       no: '1234567890',

  //     },
  //     customerDetails: [
  //       {
  //         title: 'Customer name',
  //         value: 'Arun',
  //       },
  //       {
  //         title: 'Status',
  //         value: 'Active',
  //       },
  //       {
  //         title: 'Customer ID',
  //         value: 'X78976TY6546I',
  //       },
  //       {
  //         title: 'Store name',
  //         value: 'Guduvanchery',
  //       },

  //     ],
  //     contact: [

  //       {
  //         title: 'Phone number',
  //         value: '1234567890',
  //       },


  //     ],
  //     address: [
  //       {
  //         title: 'Home',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //       },
  //       {
  //         title: 'Office',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //       },
  //     ],
  //   },


  //   // 4th customer

  //   {
  //     customerId: 'X78976TY6546I',
  //     selected: false,
  //     cardData: {
  //       Name: 'Madan',
  //       no: '9234567890',

  //     },
  //     customerDetails: [
  //       {
  //         title: 'Customer name',
  //         value: 'Madan',
  //       },
  //       {
  //         title: 'Status',
  //         value: 'Active',
  //       },
  //       {
  //         title: 'Customer ID',
  //         value: 'X78976TY6546I',
  //       },
  //       {
  //         title: 'Store name',
  //         value: 'Guduvanchery',
  //       },

  //     ],
  //     contact: [

  //       {
  //         title: 'Phone number',
  //         value: '9234567890',
  //       },


  //     ],
  //     address: [
  //       {
  //         title: 'Home',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //       },
  //       {
  //         title: 'Office',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //       },
  //     ],
  //   },

  //   {
  //     customerId: 'X78976TY6546I',
  //     selected: false,
  //     cardData: {
  //       Name: 'Nivetha',
  //       no: '1234567890',

  //     },
  //     customerDetails: [
  //       {
  //         title: 'Customer name',
  //         value: 'Nivetha',
  //       },
  //       {
  //         title: 'Status',
  //         value: 'Active',
  //       },
  //       {
  //         title: 'Customer ID',
  //         value: 'X78976TY6546I',
  //       },
  //       {
  //         title: 'Store name',
  //         value: 'Guduvanchery',
  //       },

  //     ],
  //     contact: [

  //       {
  //         title: 'Phone number',
  //         value: '1234567890',
  //       },


  //     ],
  //     address: [
  //       {
  //         title: 'Home',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //       },
  //       {
  //         title: 'Office',
  //         value: `14/A, East coast street, South west
  //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //       },
  //     ],
  //   },


  //   //     {
  //   //     customerId: 'X78976TY6546I',
  //   //      selected: false,
  //   //     cardData: {
  //   //       Name: 'Akash',
  //   //       no: '1234567890',

  //   //     },
  //   //     customerDetails: [
  //   //       {
  //   //         title: 'Customer name',
  //   //         value: 'Akash',
  //   //       },
  //   //       {
  //   //         title: 'Status',
  //   //         value: 'Active',
  //   //       },
  //   //       {
  //   //         title: 'Customer ID',
  //   //         value: 'X78976TY6546I',
  //   //       },
  //   //       {
  //   //         title: 'Store name',
  //   //         value: 'Guduvanchery',
  //   //       },

  //   //     ],
  //   //     contact: [

  //   //       {
  //   //         title: 'Phone number',
  //   //         value: '1234567890',
  //   //       },


  //   //     ],
  //   //     address: [
  //   //  {
  //   //         title: 'Home',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //   //       },
  //   //       {
  //   //         title: 'Office',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //   //       },
  //   //     ],
  //   //   },

  //   //     {
  //   //     customerId: 'X78976TY6546I',
  //   //       selected: false,
  //   //     cardData: {
  //   //       Name: 'Tazeen',
  //   //       no: '1234567890',

  //   //     },
  //   //     customerDetails: [
  //   //       {
  //   //         title: 'Customer name',
  //   //         value: 'Tazeen',
  //   //       },
  //   //       {
  //   //         title: 'Status',
  //   //         value: 'Active',
  //   //       },
  //   //       {
  //   //         title: 'Customer ID',
  //   //         value: 'X78976TY6546I',
  //   //       },
  //   //       {
  //   //         title: 'Store name',
  //   //         value: 'Guduvanchery',
  //   //       },

  //   //     ],
  //   //     contact: [

  //   //       {
  //   //         title: 'Phone number',
  //   //         value: '1234567890',
  //   //       },


  //   //     ],
  //   //     address: [
  //   //  {
  //   //         title: 'Home',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //   //       },
  //   //       {
  //   //         title: 'Office',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //   //       },
  //   //     ],
  //   //   },

  //   //     {
  //   //     customerId: 'X78976TY6546I',
  //   //           selected: false,
  //   //     cardData: {
  //   //       Name: 'Sam',
  //   //       no: '1234567890',

  //   //     },
  //   //     customerDetails: [
  //   //       {
  //   //         title: 'Customer name',
  //   //         value: 'Sam',
  //   //       },
  //   //       {
  //   //         title: 'Status',
  //   //         value: 'Active',
  //   //       },
  //   //       {
  //   //         title: 'Customer ID',
  //   //         value: 'X78976TY6546I',
  //   //       },
  //   //       {
  //   //         title: 'Store name',
  //   //         value: 'Guduvanchery',
  //   //       },

  //   //     ],
  //   //     contact: [

  //   //       {
  //   //         title: 'Phone number',
  //   //         value: '1234567890',
  //   //       },


  //   //     ],
  //   //     address: [
  //   //  {
  //   //         title: 'Home',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.  `,
  //   //       },
  //   //       {
  //   //         title: 'Office',
  //   //         value: `14/A, East coast street, South west
  //   //         Kotturpalayamkotai, Vikasvendra kundramma puram,
  //   //         Tirunelveli. 627422. Opposite: Olala High-class Non-veg Restaurant.   `,
  //   //       },
  //   //     ],
  //   //   },


  // ]


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
      studentdetail: [
        {
          title: 'Package',
          value: data.package,
        },
        { title: 'Loaction', value: data.location },

      ],

    };

    console.log('new service framed', data);
    this.selectedstudent = data;
    this.users.push(data);
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

}
